"use client";

import { useState } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";

interface MockReference {
  mock_id: string;
  nama_mock: string;
  sektor: string;
  keywords: string;
  path_image: string;
  similarity: number;
}

interface RecommendationResponse {
  rekomendasi_fitur: string;
  sektor_terdeteksi: string;
  mock_references: MockReference[];
}

export default function RekomendasiPage() {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<RecommendationResponse | null>(null);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setLoading(true);
    setError("");
    setResult(null);

    try {
      const response = await axios.post(
        "http://localhost:5589/recommend",
        {
          input: input,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
      setResult(response.data);
    } catch (err) {
      setError("Gagal mendapatkan rekomendasi. Silakan coba lagi.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-indigo-900 mb-8">
          Rekomendasi Mockup
        </h1>

        <form onSubmit={handleSubmit} className="mb-8">
          <div className="flex gap-4">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Contoh: saya mau bikin toko online jualan ayam goreng"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Memproses..." : "Cari"}
            </button>
          </div>
        </form>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg mb-6">
            {error}
          </div>
        )}

        {result && (
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Rekomendasi Fitur
              </h2>
              <div className="prose prose-indigo max-w-none">
                <ReactMarkdown>{result.rekomendasi_fitur}</ReactMarkdown>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Mock Reference
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {result.mock_references.map((mock) => (
                  <div
                    key={mock.mock_id}
                    className="border rounded-lg overflow-hidden"
                  >
                    <img
                      src={mock.path_image}
                      alt={mock.nama_mock}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-3">
                      <p className="font-medium text-gray-800">
                        {mock.nama_mock}
                      </p>
                      <p className="text-sm text-gray-500">
                        ID: {mock.mock_id}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
