"use client";

import { useState } from "react";
import { ArrowRight, MapPin, Sparkles } from "lucide-react";
import ReactMarkdown, { type Components } from "react-markdown";
import remarkGfm from "remark-gfm";
import { useRecommendMockMutation } from "@/services/rekomendasiApi";
import type { RecommendationResponse } from "@/types/rekomendasi";

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

export default function RekomendasiPage() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState<RecommendationResponse | null>(null);
  const [error, setError] = useState("");
  const [recommendMock, { isLoading }] = useRecommendMockMutation();

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

  return (
    <div className="animate-in fade-in duration-500">
      <div className="mb-12">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">
          Discovery Questionnaire
        </h1>
        <p className="text-slate-500 text-lg max-w-2xl">
          Tulis ide website kamu. Sistem akan membuat rekomendasi fitur dan
          mencarikan referensi mockup paling relevan.
        </p>
      </div>

      <div className="flex flex-col items-center text-center mb-16">
        <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white mb-6 shadow-md shadow-blue-600/20 rotate-3">
          <Sparkles size={24} />
        </div>
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
                className="bg-[#2563EB] hover:bg-blue-600 text-white px-5 py-2 rounded-xl font-medium flex items-center gap-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
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

        <div className="flex items-center gap-4 mt-6 text-sm">
          <span className="text-slate-400 font-semibold uppercase tracking-wider text-xs">
            Inspirasi:
          </span>
          <span className="text-slate-500">Aplikasi Edukasi</span>
          <span className="text-slate-500">Kampanye Lingkungan</span>
          <span className="text-slate-500">Smart Home Concept</span>
        </div>
      </div>

      {result && (
        <div className="space-y-12 pb-12">
          <div>
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <h3 className="text-xl font-bold text-slate-800 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-sm font-bold">
                  1
                </span>
                Rekomendasi Fitur
              </h3>
              {result.sektor_terdeteksi && (
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-700 capitalize">
                  Sektor: {result.sektor_terdeteksi}
                </span>
              )}
            </div>

            <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={markdownComponents}
              >
                {result.rekomendasi_fitur}
              </ReactMarkdown>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-slate-800 flex items-center gap-3 mb-6">
              <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-sm font-bold">
                2
              </span>
              Mock Reference
            </h3>

            {result.mock_references.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {result.mock_references.map((mock) => (
                  <div
                    key={mock.mock_id}
                    className="bg-white border border-slate-200 rounded-3xl overflow-hidden hover:border-blue-500 transition-all hover:shadow-md"
                  >
                    <img
                      src={mock.path_image}
                      alt={mock.nama_mock}
                      className="w-full aspect-[4/3] object-cover"
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
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white border border-slate-200 rounded-3xl p-6 text-sm text-slate-500">
                Referensi mock belum tersedia untuk input ini.
              </div>
            )}
          </div>
        </div>
      )}

      {isLoading && (
        <div className="bg-white border border-slate-200 rounded-3xl p-6 text-sm text-slate-600">
          Memproses rekomendasi...
        </div>
      )}

      {!result && !isLoading && !error && (
        <div className="bg-white border border-slate-200 rounded-3xl p-6 text-sm text-slate-500">
          Masukkan ide kamu lalu klik tombol <strong>Mulai</strong> untuk
          melihat rekomendasi fitur dan mock reference.
        </div>
      )}
    </div>
  );
}
