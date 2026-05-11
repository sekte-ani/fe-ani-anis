export interface RecommendationRequest {
  input: string;
}

export interface MockReference {
  mock_id: string;
  nama_mock: string;
  sektor: string;
  keywords: string;
  path_image: string;
  similarity: number;
}

export interface RecommendationResponse {
  rekomendasi_fitur: string;
  sektor_terdeteksi: string;
  mock_references: MockReference[];
}
