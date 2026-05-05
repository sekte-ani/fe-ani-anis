export interface Mock {
  id: string;
  mock_id: string;
  nama_mock: string;
  sektor: string;
  keywords: string;
  path_image: string;
  embedding: number[];
  created_at: string;
  updated_at?: string;
}

export interface MockListResponse {
  data: Mock[];
  meta?: {
    total: number;
    page: number;
    limit: number;
    total_pages: number;
  };
}

export interface MockDetailResponse {
  data: Mock;
}

export interface CreateMockRequest {
  mock_id: string;
  nama_mock: string;
  sektor: string;
  keywords: string;
  path_image: string;
}

export interface CreateMockResponse {
  message: string;
  data: Mock;
}

export interface UpdateMockRequest {
  nama_mock?: string;
  sektor?: string;
  keywords?: string;
  path_image?: string;
}

export interface UpdateMockResponse {
  message: string;
  data: Mock;
}

export interface DeleteMockResponse {
  message: string;
}

export interface GenerateKeywordsRequest {
  image_url: string;
}

export interface GenerateKeywordsResponse {
  success: boolean;
  message: string;
  data: {
    keywords: string;
  };
}

export interface MockFilterParams {
  sektor?: string;
  search?: string;
  page?: number;
  limit?: number;
}

export interface UploadImageResponse {
  success: boolean;
  message: string;
  data: {
    url: string;
  };
}