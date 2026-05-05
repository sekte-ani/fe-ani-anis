import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "@/lib/customBaseQuery";
import type {
  MockListResponse,
  MockDetailResponse,
  CreateMockRequest,
  CreateMockResponse,
  UpdateMockRequest,
  UpdateMockResponse,
  DeleteMockResponse,
  GenerateKeywordsRequest,
  GenerateKeywordsResponse,
  MockFilterParams,
  UploadImageResponse,
} from "@/types/mock";

export const mockApi = createApi({
  reducerPath: "mockApi",
  baseQuery: axiosBaseQuery(),
  endpoints: (builder) => ({
    getMocks: builder.query<MockListResponse, MockFilterParams | void>({
      query: (params) => {
        const queryParams = new URLSearchParams();
        if (params?.sektor) queryParams.set("sektor", params.sektor);
        if (params?.search) queryParams.set("search", params.search);
        if (params?.page) queryParams.set("page", String(params.page));
        if (params?.limit) queryParams.set("limit", String(params.limit));

        return {
          url: `/admin/mocks${queryParams.toString() ? `?${queryParams.toString()}` : ""}`,
          method: "GET",
        };
      },
    }),

    getMockById: builder.query<MockDetailResponse, string>({
      query: (mockId) => ({
        url: `/admin/mocks/${mockId}`,
        method: "GET",
      }),
    }),

    uploadImage: builder.mutation<UploadImageResponse, File>({
      query: (file) => {
        const formData = new FormData();
        formData.append("image", file);
        return {
          url: "/admin/mocks/upload-image",
          method: "POST",
          data: formData,
        };
      },
    }),

    createMock: builder.mutation<CreateMockResponse, CreateMockRequest>({
      query: (mockData) => ({
        url: "/admin/mocks",
        method: "POST",
        data: mockData,
      }),
    }),

    updateMock: builder.mutation<
      UpdateMockResponse,
      { mockId: string; data: UpdateMockRequest }
    >({
      query: ({ mockId, data }) => ({
        url: `/admin/mocks/${mockId}`,
        method: "PUT",
        data,
      }),
    }),

    deleteMock: builder.mutation<DeleteMockResponse, string>({
      query: (mockId) => ({
        url: `/admin/mocks/${mockId}`,
        method: "DELETE",
      }),
    }),

    generateKeywords: builder.mutation<
      GenerateKeywordsResponse,
      GenerateKeywordsRequest
    >({
      query: (data) => ({
        url: "/admin/mocks/generate-keywords",
        method: "POST",
        data,
      }),
    }),
  }),
});

export const {
  useGetMocksQuery,
  useLazyGetMocksQuery,
  useGetMockByIdQuery,
  useLazyGetMockByIdQuery,
  useUploadImageMutation,
  useCreateMockMutation,
  useUpdateMockMutation,
  useDeleteMockMutation,
  useGenerateKeywordsMutation,
} = mockApi;
