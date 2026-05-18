"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, MapPin, Sparkles } from "lucide-react";
import ReactMarkdown, { type Components } from "react-markdown";
import remarkGfm from "remark-gfm";
import { useRecommendMockMutation } from "@/services/rekomendasiApi";
import type { RecommendationResponse, MockReference } from "@/types/rekomendasi";

const INSPIRATIONS = [
  "Aplikasi edukasi interaktif untuk anak",
  "Website kampanye peduli lingkungan",
  "Dashboard manajemen smart home",
  "Toko online pakaian olahraga",
  "Sistem booking jadwal klinik gigi",
  "Aplikasi kasir untuk kedai kopi",
  "Platform pelacakan rutinitas fitness",
  "Website pemesanan tiket konser musik",
  "Sistem informasi sekolah berbasis web",
  "Aplikasi resep masakan nusantara"
];

interface RecommendationApiError {
  message?: string;
  data?: {
    message?: string;
  };
}

const markdownComponents: Components = {
  h1: ({ children }) => (
    <h1 className="text-2xl font-bold text-slate-900 mt-4 mb-3">{children}</h1>
  ),
  h2: ({ children }) => (
    <h2 className="text-xl font-bold text-slate-900 mt-4 mb-2">{children}</h2>
  ),
  h3: ({ children }) => (
    <h3 className="text-lg font-semibold text-slate-900 mt-3 mb-2">
      {children}
    </h3>
  ),
  p: ({ children }) => (
    <p className="text-slate-700 leading-relaxed mb-3">{children}</p>
  ),
  ol: ({ children }) => (
    <ol className="list-decimal list-outside pl-6 space-y-2 mb-3 marker:font-semibold marker:text-blue-600">
      {children}
    </ol>
  ),
  ul: ({ children }) => (
    <ul className="list-disc list-outside pl-6 space-y-2 mb-3 marker:text-blue-600">
      {children}
    </ul>
  ),
  li: ({ children }) => (
    <li className="text-slate-700 leading-relaxed pl-1">{children}</li>
  ),
  strong: ({ children }) => (
    <strong className="font-semibold text-slate-900">{children}</strong>
  ),
  em: ({ children }) => <em className="italic">{children}</em>,
  a: ({ href, children }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-600 hover:text-blue-700 underline"
    >
      {children}
    </a>
  ),
  code: ({ children }) => (
    <code className="bg-gray-100 text-pink-600 px-1.5 py-0.5 rounded text-sm font-mono">
      {children}
    </code>
  ),
  blockquote: ({ children }) => (
    <blockquote className="border-l-4 border-indigo-300 pl-4 italic text-gray-600 my-3">
      {children}
    </blockquote>
  ),
  hr: () => <hr className="my-4 border-slate-200" />,
};

function getErrorMessage(error: unknown) {
  const defaultMessage = "Gagal mendapatkan rekomendasi. Silakan coba lagi.";

  if (typeof error !== "object" || error === null) {
    return defaultMessage;
  }

  const recommendationError = error as RecommendationApiError;
  return (
    recommendationError.data?.message ||
    recommendationError.message ||
    defaultMessage
  );
}

/* ─── Skeleton Components ─── */

function FeatureSkeleton() {
  return (
    <div className="space-y-8">
      <div>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-8 rounded-full bg-slate-200 animate-pulse" />
          <div className="h-6 w-40 bg-slate-200 rounded-lg animate-pulse" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <MockCardSkeleton key={i} />
          ))}
        </div>
      </div>

      <div>
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-slate-200 animate-pulse" />
            <div className="h-6 w-48 bg-slate-200 rounded-lg animate-pulse" />
          </div>
          <div className="h-6 w-28 bg-slate-200 rounded-full animate-pulse" />
        </div>

        <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm space-y-4">
          <div className="h-5 w-3/4 bg-slate-100 rounded animate-pulse" />
          <div className="h-4 w-full bg-slate-100 rounded animate-pulse" />
          <div className="h-4 w-full bg-slate-100 rounded animate-pulse" />
          <div className="h-4 w-5/6 bg-slate-100 rounded animate-pulse" />
          <div className="h-4 w-2/3 bg-slate-100 rounded animate-pulse" />
          <div className="pt-2" />
          <div className="h-5 w-1/2 bg-slate-100 rounded animate-pulse" />
          <div className="h-4 w-full bg-slate-100 rounded animate-pulse" />
          <div className="h-4 w-4/5 bg-slate-100 rounded animate-pulse" />
          <div className="h-4 w-3/4 bg-slate-100 rounded animate-pulse" />
        </div>
      </div>
    </div>
  );
}

function MockCardSkeleton() {
  return (
    <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden">
      <div className="w-full aspect-[4/3] bg-slate-200 animate-pulse" />
      <div className="p-5 space-y-3">
        <div className="flex items-start justify-between gap-3">
          <div className="h-5 w-3/4 bg-slate-100 rounded animate-pulse" />
          <div className="h-6 w-14 bg-slate-100 rounded-lg animate-pulse shrink-0" />
        </div>
        <div className="h-3 w-24 bg-slate-100 rounded animate-pulse" />
        <div className="h-4 w-16 bg-slate-100 rounded animate-pulse" />
        <div className="h-3 w-full bg-slate-100 rounded animate-pulse" />
      </div>
    </div>
  );
}

/* ─── Main Page ─── */

export default function CreationPage() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState<RecommendationResponse | null>(null);
  const [error, setError] = useState("");
  const [recommendMock, { isLoading }] = useRecommendMockMutation();
  const router = useRouter();

  const [randomInspirations, setRandomInspirations] = useState<string[]>([]);

  useEffect(() => {
    // Delaying the state update avoids the "synchronously calling setState" warning
    // while safely generating client-only random data without hydration errors.
    const timer = setTimeout(() => {
      const shuffled = [...INSPIRATIONS].sort(() => 0.5 - Math.random());
      setRandomInspirations(shuffled.slice(0, 3));
    }, 0);
    
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedInput = input.trim();
    if (!trimmedInput || isLoading) return;

    setError("");
    setResult(null);

    try {
      const response = await recommendMock({ input: trimmedInput }).unwrap();
      setResult(response);
    } catch (requestError) {
      setError(getErrorMessage(requestError));
    }
  };

  const handleSelectMock = (mock: MockReference) => {
    const params = new URLSearchParams({
      mock_id: mock.mock_id,
      nama_mock: mock.nama_mock,
      sektor: mock.sektor,
      path_image: mock.path_image,
      keywords: mock.keywords || "",
      similarity: String(mock.similarity),
    });

    if (result?.rekomendasi_fitur) {
      params.set("rekomendasi_fitur", result.rekomendasi_fitur);
    }

    router.push(`/rekomendasi/generation?${params.toString()}`);
  };

  return (
    <div className="animate-in fade-in duration-500">
      {/* Hero Section — centered */}
      <div className="flex flex-col items-center text-center mb-16">
        <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white mb-6 shadow-md shadow-blue-600/20 rotate-3">
          <Sparkles size={24} />
        </div>

        <h1 className="text-3xl font-bold text-slate-900 mb-3">
          Discovery Questionnaire
        </h1>
        <p className="text-slate-500 text-lg max-w-2xl mb-10">
          Tulis ide website kamu. Sistem akan membuat rekomendasi fitur dan
          mencarikan referensi mockup paling relevan.
        </p>

        <h2 className="text-4xl font-extrabold text-slate-800 mb-4">
          Halo, kamu mau buat
          <br />
          apa nih?
        </h2>
        <p className="text-slate-500 mb-8 text-lg">
          Tuangkan idenya, biarkan sistem menyusun struktur awal konsepmu.
        </p>

        <form onSubmit={handleSubmit} className="w-full max-w-2xl">
          <div className="relative shadow-sm rounded-2xl overflow-hidden">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <MapPin className="h-5 w-5 text-slate-400" />
            </div>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Contoh: saya mau bikin toko online jualan ayam goreng"
              className="w-full py-4 pl-12 pr-36 bg-white border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-700"
            />
            <div className="absolute inset-y-0 right-2 flex items-center">
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="bg-[#2563EB] hover:bg-blue-700 text-white px-5 py-2 rounded-xl font-medium flex items-center gap-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? "Memproses..." : "Mulai"}
                {!isLoading && <ArrowRight size={16} />}
              </button>
            </div>
          </div>

          {error && (
            <div className="mt-4 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-left">
              {error}
            </div>
          )}
        </form>

        <div className="flex flex-wrap items-center justify-center gap-2 mt-6 text-sm min-h-[28px]">
          <span className="text-slate-400 font-semibold uppercase tracking-wider text-xs">
            Inspirasi:
          </span>
          {randomInspirations.length > 0 ? (
            randomInspirations.map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => setInput(`Saya mau membuat ${tag.toLowerCase()}`)}
                className="text-slate-500 bg-slate-100 hover:bg-blue-50 hover:text-blue-600 hover:scale-[1.02] active:scale-[0.98] transition-all px-3 py-1 rounded-full text-xs font-medium cursor-pointer"
              >
                {tag}
              </button>
            ))
          ) : (
            <div className="flex gap-2">
              <span className="w-24 h-6 bg-slate-100 animate-pulse rounded-full" />
              <span className="w-32 h-6 bg-slate-100 animate-pulse rounded-full" />
              <span className="w-28 h-6 bg-slate-100 animate-pulse rounded-full" />
            </div>
          )}
        </div>
      </div>

      {/* Loading Skeleton */}
      {isLoading && (
        <div className="pb-12">
          <FeatureSkeleton />
        </div>
      )}

      {/* Results */}
      {result && !isLoading && (
        <div className="space-y-12 pb-12">
          <div>
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <h3 className="text-xl font-bold text-slate-800 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-sm font-bold">
                  1
                </span>
                Mock Reference
              </h3>
              {result.sektor_terdeteksi && (
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-700 capitalize">
                  Sektor: {result.sektor_terdeteksi}
                </span>
              )}
            </div>
            <p className="text-slate-500 text-sm mb-6">
              Klik salah satu mockup untuk melanjutkan ke formulir pemesanan.
            </p>

            {result.mock_references.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {result.mock_references.map((mock) => (
                  <button
                    key={mock.mock_id}
                    type="button"
                    onClick={() => handleSelectMock(mock)}
                    className="group bg-white border border-slate-200 rounded-3xl overflow-hidden hover:border-blue-500 transition-all hover:shadow-lg hover:shadow-blue-500/10 text-left cursor-pointer relative"
                  >
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/5 transition-colors z-10 rounded-3xl flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                        <div className="bg-blue-600 text-white px-4 py-2 rounded-xl font-medium text-sm flex items-center gap-2 shadow-lg">
                          Pilih Mockup Ini
                          <ArrowRight size={14} />
                        </div>
                      </div>
                    </div>

                    <img
                      src={mock.path_image}
                      alt={mock.nama_mock}
                      className="w-full aspect-[4/3] object-cover group-hover:scale-[1.02] transition-transform duration-300"
                    />
                    <div className="p-5">
                      <div className="flex items-start justify-between gap-3">
                        <p className="font-bold text-slate-800 leading-snug">
                          {mock.nama_mock}
                        </p>
                        <p className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded-lg shrink-0">
                          {(mock.similarity * 100).toFixed(1)}%
                        </p>
                      </div>
                      <p className="text-xs text-slate-500 mt-2">
                        ID: {mock.mock_id}
                      </p>
                      <p className="text-sm text-slate-600 capitalize mt-1">
                        {mock.sektor}
                      </p>
                      {mock.keywords && (
                        <p className="text-xs text-slate-500 mt-2 break-words">
                          {mock.keywords}
                        </p>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            ) : (
              <div className="bg-white border border-slate-200 rounded-3xl p-6 text-sm text-slate-500">
                Referensi mock belum tersedia untuk input ini.
              </div>
            )}
          </div>

          <div>
            <h3 className="text-xl font-bold text-slate-800 flex items-center gap-3 mb-4">
              <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-sm font-bold">
                2
              </span>
              Rekomendasi Fitur
            </h3>

            <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={markdownComponents}
              >
                {result.rekomendasi_fitur}
              </ReactMarkdown>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
