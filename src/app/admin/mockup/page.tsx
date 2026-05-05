"use client";

import { useState, useCallback, useRef } from "react";
import { useSearchParams } from "next/navigation";
import {
  Search,
  RotateCcw,
  Plus,
  Edit2,
  Trash2,
  Upload as UploadIcon,
  X,
  Loader2,
  CheckCircle,
  AlertCircle,
  ChevronLeft,
  ChevronRight,
  Copy,
  Check,
} from "lucide-react";
import {
  useGetMocksQuery,
  useCreateMockMutation,
  useDeleteMockMutation,
  useGenerateKeywordsMutation,
  useUploadImageMutation,
  useUpdateMockMutation,
  useLazyGetMockByIdQuery,
} from "@/services/mockApi";
import type { Mock } from "@/types/mock";

interface Toast {
  id: string;
  message: string;
  type: "success" | "error";
}

const sektorOptions = [
  { value: "kuliner", label: "Kuliner" },
  { value: "perdagang", label: "Perdagang" },
  { value: "kesehatan", label: "Kesehatan dan Kecantikan" },
  { value: "pendidikan", label: "Pendidikan" },
  { value: "jasa", label: "Jasa Profesional" },
  { value: "pemerintah", label: "Pemerintah dan Sosial" },
  { value: "keuangan", label: "Keuangan" },
  { value: "logistik", label: "Logistik" },
  { value: "kreatif", label: "Kreatif dan Digital" },
  { value: "gaya_hidup", label: "Gaya Hidup" },
  { value: "agrikultur", label: "Agrikultur" },
  { value: "otomotif", label: "Otomotif" },
];

const SkeletonRow = () => (
  <tr className="animate-pulse">
    <td className="px-4 py-4"><div className="h-4 bg-gray-200 rounded w-20"></div></td>
    <td className="px-4 py-4"><div className="h-4 bg-gray-200 rounded w-40"></div></td>
    <td className="px-4 py-4"><div className="h-6 bg-gray-200 rounded w-24"></div></td>
    <td className="px-4 py-4"><div className="h-4 bg-gray-200 rounded w-48"></div></td>
    <td className="px-4 py-4"><div className="h-10 w-16 bg-gray-200 rounded"></div></td>
    <td className="px-4 py-4"><div className="h-5 bg-gray-200 rounded w-20"></div></td>
    <td className="px-4 py-4"><div className="h-8 bg-gray-200 rounded w-24"></div></td>
  </tr>
);

const ToastComponent = ({ toast, onRemove }: { toast: Toast; onRemove: (id: string) => void }) => (
  <div className={`flex items-center gap-3 px-4 py-3 rounded-xl shadow-lg border ${
    toast.type === "success" 
      ? "bg-green-50 border-green-200 text-green-800" 
      : "bg-red-50 border-red-200 text-red-800"
  }`}>
    {toast.type === "success" ? (
      <CheckCircle size={18} className="text-green-600" />
    ) : (
      <AlertCircle size={18} className="text-red-600" />
    )}
    <span className="text-sm font-medium">{toast.message}</span>
    <button onClick={() => onRemove(toast.id)} className="ml-auto hover:opacity-70">
      <X size={16} />
    </button>
  </div>
);

export default function MockupManagerPage() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [toasts, setToasts] = useState<Toast[]>([]);
  const [deleteModal, setDeleteModal] = useState<{ open: boolean; mockId: string | null }>({ open: false, mockId: null });
  const [showSektorDropdown, setShowSektorDropdown] = useState(false);
  const [copiedUrl, setCopiedUrl] = useState<string | null>(null);

  const [selectedSektor, setSelectedSektor] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(10);

  const [formData, setFormData] = useState({
    image: null as string | null,
    imageUrl: "",
    sektor: "" as string,
    mockId: "",
    namaMock: "",
    keywords: "",
  });
  const [keywordsLoading, setKeywordsLoading] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  const queryParams = {
    sektor: selectedSektor.length === 1 ? selectedSektor[0] : undefined,
    search: searchQuery || undefined,
    page: currentPage,
    limit: pageSize,
  };

  const { data: mocksData, isLoading, refetch } = useGetMocksQuery(
    selectedSektor.length <= 1 && (searchQuery || currentPage > 1) ? queryParams : Object.keys(queryParams).length > 0 ? queryParams : undefined
  );

  const [createMock] = useCreateMockMutation();
  const [deleteMock] = useDeleteMockMutation();
  const [generateKeywords] = useGenerateKeywordsMutation();
  const [uploadImage] = useUploadImageMutation();
  const [updateMock] = useUpdateMockMutation();
  const [getMockById] = useLazyGetMockByIdQuery();

  const [editMode, setEditMode] = useState<{ open: boolean; mockId: string | null }>({ open: false, mockId: null });
  const [loadingEdit, setLoadingEdit] = useState(false);

  const mocks = mocksData?.data || [];
  const totalItems = mocksData?.meta?.total || mocks.length;
  const totalPages = Math.ceil(totalItems / pageSize);

  const addToast = (message: string, type: "success" | "error") => {
    const id = Date.now().toString();
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4000);
  };

  const handleFilterChange = useCallback(() => {
    // Filter is applied directly via state, no URL params needed
    setCurrentPage(1);
  }, []);

  const handleResetFilter = () => {
    setSelectedSektor([]);
    setSearchQuery("");
    setCurrentPage(1);
  };

  const handleEdit = async (mockId: string) => {
    setLoadingEdit(true);
    try {
      const result = await getMockById(mockId).unwrap();
      const mock = result.data;
      
      setFormData({
        image: mock.path_image,
        imageUrl: mock.path_image,
        sektor: mock.sektor,
        mockId: mock.mock_id,
        namaMock: mock.nama_mock,
        keywords: mock.keywords,
      });
      
      setEditMode({ open: true, mockId });
      setDrawerOpen(true);
    } catch (error: any) {
      addToast(error?.data?.message || "Gagal mengambil data mockup", "error");
    } finally {
      setLoadingEdit(false);
    }
  };

  const handleUpdate = async () => {
    if (!formData.sektor || !formData.namaMock) {
      addToast("Mohon lengkapi semua field wajib", "error");
      return;
    }

    setUploading(true);
    try {
      const updateData: any = {
        nama_mock: formData.namaMock,
        sektor: formData.sektor,
        keywords: formData.keywords,
      };
      
      if (formData.imageUrl) {
        updateData.path_image = formData.imageUrl;
      }

      await updateMock({
        mockId: editMode.mockId!,
        data: updateData,
      }).unwrap();

      addToast("Mockup berhasil diupdate", "success");
      setDrawerOpen(false);
      setEditMode({ open: false, mockId: null });
      setFormData({
        image: null,
        imageUrl: "",
        sektor: "",
        mockId: "",
        namaMock: "",
        keywords: "",
      });
      refetch();
    } catch (error: any) {
      addToast(error?.data?.message || "Gagal mengupdate mockup", "error");
    } finally {
      setUploading(false);
    }
  };

  const stats = {
    total: mocks.length,
    sektor: new Set(mocks.map((m: Mock) => m.sektor)).size,
    belumEmbedding: mocks.filter((m: Mock) => !m.embedding || m.embedding.length === 0).length,
  };

  const handleImageUpload = async (file: File) => {
    const isValidType = ["image/png", "image/jpeg", "image/webp"].includes(file.type);
    const isValidSize = file.size <= 5 * 1024 * 1024;

    if (!isValidType) {
      addToast("Hanya support PNG, JPG, atau WebP", "error");
      return false;
    }
    if (!isValidSize) {
      addToast("Ukuran maksimal 5MB", "error");
      return false;
    }

    // Show preview immediately
    const reader = new FileReader();
    reader.onload = (e) => {
      setFormData((prev) => ({ ...prev, image: e.target?.result as string }));
    };
    reader.readAsDataURL(file);

    // Step 1: Upload image to get URL
    setKeywordsLoading(true);
    try {
      const uploadResult = await uploadImage(file).unwrap();
      const imageUrl = uploadResult.data.url;

      // Step 2: Generate keywords using the uploaded URL
      const keywordsResult = await generateKeywords({ image_url: imageUrl }).unwrap();
      setFormData((prev) => ({ 
        ...prev, 
        keywords: keywordsResult.data?.keywords || "",
        imageUrl: imageUrl 
      }));
    } catch (error: any) {
      console.error("Failed to process image:", error);
      addToast(error?.data?.message || "Gagal mengupload gambar", "error");
      setFormData((prev) => ({ ...prev, image: null }));
    } finally {
      setKeywordsLoading(false);
    }
    return false;
  };

  const handleSektorChange = (value: string) => {
    const prefix = value.toUpperCase().slice(0, 3);
    const randomNum = String(Math.floor(Math.random() * 900) + 100);
    setFormData((prev) => ({
      ...prev,
      sektor: value,
      mockId: `${prefix}-${randomNum}`,
    }));
  };

  const handleSubmit = async () => {
    if (!formData.sektor || !formData.namaMock || !formData.imageUrl) {
      addToast("Mohon lengkapi semua field wajib", "error");
      return;
    }

    setUploading(true);
    try {
      await createMock({
        mock_id: formData.mockId || `${formData.sektor.toUpperCase()}-${String(Math.floor(Math.random() * 900) + 100)}`,
        nama_mock: formData.namaMock,
        sektor: formData.sektor,
        keywords: formData.keywords || "No keywords generated",
        path_image: formData.imageUrl,
      }).unwrap();

      addToast("Mockup berhasil ditambahkan", "success");
      setDrawerOpen(false);
      setFormData({
        image: null,
        imageUrl: "",
        sektor: "",
        mockId: "",
        namaMock: "",
        keywords: "",
      });
      setFormData({
        image: null,
        imageUrl: "",
        sektor: "",
        mockId: "",
        namaMock: "",
        keywords: "",
      });
      refetch();
    } catch (error: any) {
      addToast(error?.data?.message || "Gagal menambahkan mockup", "error");
    } finally {
      setUploading(false);
    }
  };

  const handleDeleteConfirm = async () => {
    if (deleteModal.mockId) {
      try {
        await deleteMock(deleteModal.mockId).unwrap();
        addToast("Mockup berhasil dihapus", "success");
        refetch();
      } catch (error: any) {
        addToast(error?.data?.message || "Gagal menghapus mockup", "error");
      }
      setDeleteModal({ open: false, mockId: null });
    }
  };

  const toggleSektor = (value: string) => {
    setSelectedSektor((prev) =>
      prev.includes(value)
        ? prev.filter((s) => s !== value)
        : [...prev, value]
    );
  };

  const getSektorLabel = (value: string) => {
    return sektorOptions.find((s) => s.value === value)?.label || value;
  };

  return (
    <div className="space-y-6">
      {/* Toast Container */}
      <div className="fixed top-20 right-6 z-50 flex flex-col gap-2">
        {toasts.map((toast) => (
          <ToastComponent key={toast.id} toast={toast} onRemove={(id) => setToasts((prev) => prev.filter((t) => t.id !== id))} />
        ))}
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
          <p className="text-sm text-gray-500 mb-1">Total Mock</p>
          <p className="text-3xl font-bold text-gray-900">{isLoading ? "-" : stats.total}</p>
        </div>
        <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
          <p className="text-sm text-gray-500 mb-1">Jumlah Sektor</p>
          <p className="text-3xl font-bold text-gray-900">{isLoading ? "-" : stats.sektor}</p>
        </div>
        <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
          <p className="text-sm text-gray-500 mb-1">Belum Ada Embedding</p>
          <p className="text-3xl font-bold text-amber-600">{isLoading ? "-" : stats.belumEmbedding}</p>
        </div>
      </div>

      {/* Filter Section */}
      <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Sektor Multi-Select */}
          <div className="relative w-full lg:w-64" ref={dropdownRef}>
            <button
              onClick={() => setShowSektorDropdown(!showSektorDropdown)}
              className="w-full px-4 py-2.5 text-left bg-gray-50 border border-gray-200 rounded-xl text-gray-700 hover:bg-white hover:border-gray-300 transition-colors flex items-center justify-between"
            >
              <span className={selectedSektor.length > 0 ? "text-gray-900" : "text-gray-400"}>
                {selectedSektor.length > 0 ? `${selectedSektor.length} sektor dipilih` : "Pilih Sektor"}
              </span>
              <ChevronRight size={16} className={`transition-transform ${showSektorDropdown ? "rotate-90" : ""}`} />
            </button>
            {showSektorDropdown && (
              <div className="absolute top-full mt-2 w-full bg-white border border-gray-200 rounded-xl shadow-lg z-20 py-1 max-h-60 overflow-y-auto">
                {sektorOptions.map((option) => (
                  <label
                    key={option.value}
                    className="flex items-center gap-3 px-4 py-2.5 hover:bg-gray-50 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={selectedSektor.includes(option.value)}
                      onChange={() => toggleSektor(option.value)}
                      className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary"
                    />
                    <span className="text-sm text-gray-700">{option.label}</span>
                  </label>
                ))}
              </div>
            )}
          </div>

          {/* Search */}
          <div className="relative w-full lg:w-80">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Cari nama, keywords, atau ID..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleFilterChange()}
              className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white transition-all"
            />
          </div>

          {/* Buttons */}
          <div className="flex gap-2">
            <button
              onClick={handleFilterChange}
              className="px-4 py-2.5 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 transition-colors"
            >
              Filter
            </button>
            <button
              onClick={handleResetFilter}
              className="px-4 py-2.5 border border-gray-300 text-gray-700 font-medium rounded-xl hover:bg-gray-50 transition-colors flex items-center gap-2"
            >
              <RotateCcw size={16} />
              Reset
            </button>
          </div>
        </div>

        {/* Selected Sektor Tags */}
        {selectedSektor.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-3 pt-3 border-t border-gray-100">
            {selectedSektor.map((value) => (
              <span
                key={value}
                className="inline-flex items-center gap-1 px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full"
              >
                {getSektorLabel(value)}
                <button
                  onClick={() => {
                    setSelectedSektor((prev) => prev.filter((s) => s !== value));
                    handleFilterChange();
                  }}
                  className="hover:opacity-70"
                >
                  <X size={14} />
                </button>
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Table Section */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="p-5 border-b border-gray-100 flex justify-between items-center">
          <h2 className="text-lg font-semibold text-gray-900">Daftar Mockup</h2>
          <button
            onClick={() => setDrawerOpen(true)}
            className="px-4 py-2 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 transition-colors flex items-center gap-2"
          >
            <Plus size={16} />
            Tambah Mockup
          </button>
        </div>

        <div className="overflow-x-auto">
          {isLoading ? (
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase">Mock ID</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase">Nama Mock</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase">Sektor</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase">Keywords</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase">Mock</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase">Image URL</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase">Status</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {[1, 2, 3].map((i) => (
                  <SkeletonRow key={i} />
                ))}
              </tbody>
            </table>
          ) : mocks.length === 0 ? (
            <div className="p-10 text-center text-gray-500">
              <p>Tidak ada data mockup</p>
            </div>
          ) : (
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase">Mock ID</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase">Nama Mock</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase">Sektor</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase">Keywords</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase">Mock</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase">Image URL</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase">Status</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {mocks.map((mock: Mock) => (
                  <tr key={mock.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-4 py-4">
                      <span className="font-mono text-sm font-medium text-gray-700">{mock.mock_id}</span>
                    </td>
                    <td className="px-4 py-4">
                      <span className="font-semibold text-gray-900">{mock.nama_mock}</span>
                    </td>
                    <td className="px-4 py-4">
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full">
                        {getSektorLabel(mock.sektor)}
                      </span>
                    </td>
                    <td className="px-4 py-4">
                      <span className="text-gray-600 text-sm truncate block max-w-[220px]" title={mock.keywords}>
                        {mock.keywords}
                      </span>
                    </td>
                    <td className="px-4 py-4">
                      <div className="w-16 h-10 rounded-lg overflow-hidden bg-gray-100 border border-gray-200">
                        <img
                          src={mock.path_image}
                          alt="Mock"
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = "/images/portofolio/portofolio-ui-1.png";
                          }}
                        />
                      </div>
                    </td>
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-gray-500 truncate max-w-[150px]" title={mock.path_image}>
                          {mock.path_image}
                        </span>
                        <button
                          onClick={() => {
                            navigator.clipboard.writeText(mock.path_image);
                            setCopiedUrl(mock.path_image);
                            setTimeout(() => setCopiedUrl(null), 2000);
                          }}
                          className="p-1 text-gray-400 hover:text-primary transition-colors"
                          title="Copy URL"
                        >
                          {copiedUrl === mock.path_image ? (
                            <Check size={14} className="text-green-600" />
                          ) : (
                            <Copy size={14} />
                          )}
                        </button>
                      </div>
                    </td>
                    <td className="px-4 py-4">
                      <span className={`px-3 py-1 text-sm font-medium rounded-full ${
                        mock.embedding && mock.embedding.length > 0
                          ? "bg-green-100 text-green-700"
                          : "bg-amber-100 text-amber-700"
                      }`}>
                        {mock.embedding && mock.embedding.length > 0 ? "Sudah Embed" : "Belum Embed"}
                      </span>
                    </td>
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-2">
                        <button 
                          onClick={() => handleEdit(mock.mock_id)}
                          className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                        >
                          <Edit2 size={16} />
                        </button>
                        <button
                          onClick={() => setDeleteModal({ open: true, mockId: mock.mock_id })}
                          className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

        {/* Pagination */}
        {!isLoading && mocks.length > 0 && (
          <div className="px-5 py-4 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-500">
              Menampilkan {(currentPage - 1) * pageSize + 1} - {Math.min(currentPage * pageSize, totalItems)} dari {totalItems} mockup
            </p>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronLeft size={16} className="text-gray-600" />
              </button>
              {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                const page = i + 1;
                return (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`w-9 h-9 rounded-lg text-sm font-medium transition-colors ${
                      currentPage === page
                        ? "bg-primary text-white"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    {page}
                  </button>
                );
              })}
              <button
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronRight size={16} className="text-gray-600" />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Upload Drawer */}
      {drawerOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div className="absolute inset-0 bg-black/50" onClick={() => !uploading && setDrawerOpen(false)} />
          <div className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col">
            {/* Drawer Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900">
                {editMode.open ? "Edit Mockup" : "Tambah Mockup Baru"}
              </h3>
              <button
                onClick={() => {
                  setDrawerOpen(false);
                  setEditMode({ open: false, mockId: null });
                  setFormData({
                    image: null,
                    imageUrl: "",
                    sektor: "",
                    mockId: "",
                    namaMock: "",
                    keywords: "",
                  });
                }}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                disabled={uploading}
              >
                <X size={20} className="text-gray-500" />
              </button>
            </div>

            {/* Drawer Body */}
            <div className="flex-1 overflow-y-auto p-6 space-y-5">
              {/* Image Upload */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Gambar Mockup <span className="text-red-500">*</span>
                </label>
                {formData.image ? (
                  <div className="relative rounded-xl overflow-hidden border border-gray-200">
                    <img
                      src={formData.image}
                      alt="Preview"
                      className="w-full h-48 object-contain bg-gray-50"
                    />
                    <button
                      onClick={() => setFormData((prev) => ({ ...prev, image: null }))}
                      className="absolute top-2 right-2 p-1 bg-white rounded-full shadow-md hover:bg-gray-100"
                    >
                      <X size={16} className="text-gray-600" />
                    </button>
                  </div>
                ) : (
                  <label className="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-gray-300 rounded-xl cursor-pointer hover:border-primary hover:bg-gray-50 transition-colors">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <UploadIcon className="w-8 h-8 text-gray-400 mb-2" />
                      <p className="text-sm text-gray-500">Drag & drop atau klik</p>
                      <p className="text-xs text-gray-400 mt-1">PNG, JPG, WebP (maks 5MB)</p>
                    </div>
                    <input
                      type="file"
                      accept="image/png,image/jpeg,image/webp"
                      className="hidden"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) handleImageUpload(file);
                      }}
                    />
                  </label>
                )}
              </div>

              {/* Sektor */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Sektor <span className="text-red-500">*</span>
                </label>
                <select
                  value={formData.sektor}
                  onChange={(e) => handleSektorChange(e.target.value)}
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white transition-all"
                >
                  <option value="">Pilih sektor</option>
                  {sektorOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Mock ID */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Mock ID
                </label>
                <input
                  type="text"
                  placeholder="Auto-generated"
                  value={formData.mockId}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, mockId: e.target.value }))
                  }
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white transition-all"
                />
                <p className="text-xs text-gray-400 mt-1">Akan auto-generate dari sektor, bisa di-override</p>
              </div>

              {/* Nama Mock */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nama Mock <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Masukkan nama mockup"
                  value={formData.namaMock}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, namaMock: e.target.value }))
                  }
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white transition-all"
                />
              </div>

              {/* Keywords */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Keywords <span className="text-green-600 text-xs">(Auto-generate via AI)</span>
                </label>
                <div className="relative">
                  <textarea
                    placeholder={keywordsLoading ? "Menghasilkan keywords..." : "Keywords akan auto-generate setelah upload gambar"}
                    value={formData.keywords}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, keywords: e.target.value }))
                    }
                    rows={4}
                    disabled={keywordsLoading}
                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white transition-all resize-none disabled:bg-gray-100"
                  />
                  {keywordsLoading && (
                    <div className="absolute inset-0 bg-white/80 flex items-center justify-center rounded-xl">
                      <div className="flex items-center gap-2 text-primary">
                        <Loader2 size={18} className="animate-spin" />
                        <span className="text-sm">Generating keywords...</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Drawer Footer */}
            <div className="px-6 py-4 border-t border-gray-100 flex justify-end gap-3">
              <button
                onClick={() => {
                  setDrawerOpen(false);
                  setEditMode({ open: false, mockId: null });
                }}
                disabled={uploading}
                className="px-4 py-2.5 border border-gray-300 text-gray-700 font-medium rounded-xl hover:bg-gray-50 transition-colors disabled:opacity-50"
              >
                Batal
              </button>
              <button
                onClick={editMode.open ? handleUpdate : handleSubmit}
                disabled={uploading || loadingEdit}
                className="px-6 py-2.5 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 transition-colors flex items-center gap-2 disabled:opacity-70"
              >
                {uploading ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    {editMode.open ? "Menyimpan..." : "Mengupload..."}
                  </>
                ) : (
                  <>
                    <UploadIcon size={16} />
                    {editMode.open ? "Simpan Perubahan" : "Upload & Simpan"}
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {deleteModal.open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/50" onClick={() => setDeleteModal({ open: false, mockId: null })} />
          <div className="relative bg-white rounded-2xl shadow-xl p-6 w-full max-w-sm mx-4">
            <div className="text-center">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <AlertCircle size={24} className="text-red-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Hapus Mockup</h3>
              <p className="text-gray-500 mb-6">Apakah Anda yakin ingin menghapus mockup ini? Tindakan ini tidak dapat dibatalkan.</p>
              <div className="flex gap-3">
                <button
                  onClick={() => setDeleteModal({ open: false, mockId: null })}
                  className="flex-1 px-4 py-2.5 border border-gray-300 text-gray-700 font-medium rounded-xl hover:bg-gray-50 transition-colors"
                >
                  Batal
                </button>
                <button
                  onClick={handleDeleteConfirm}
                  className="flex-1 px-4 py-2.5 bg-red-600 text-white font-semibold rounded-xl hover:bg-red-700 transition-colors"
                >
                  Ya, Hapus
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}