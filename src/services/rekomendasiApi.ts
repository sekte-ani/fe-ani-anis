import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "@/lib/customBaseQuery";
import type {
  RecommendationRequest,
  RecommendationResponse,
} from "@/types/rekomendasi";

const RECOMMENDATION_ENDPOINT =
  process.env.NEXT_PUBLIC_RECOMMENDATION_URL ||
  "https://anismockup.anitech.id/recommend";

export const rekomendasiApi = createApi({
  reducerPath: "rekomendasiApi",
  baseQuery: axiosBaseQuery(),
  endpoints: (builder) => ({
    recommendMock: builder.mutation<
      RecommendationResponse,
      RecommendationRequest
    >({
      query: (payload) => ({
        url: RECOMMENDATION_ENDPOINT,
        method: "POST",
        data: payload,
      }),
    }),
  }),
});

export const { useRecommendMockMutation } = rekomendasiApi;
