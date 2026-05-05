import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "@/lib/customBaseQuery";
import type {
  SignInRequest,
  SignInResponse,
  MeResponse,
  UpdateProfileRequest,
  UpdateProfileResponse,
  UpdatePasswordRequest,
  UpdatePasswordResponse,
  LogoutResponse,
} from "@/types/auth";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: axiosBaseQuery(),
  endpoints: (builder) => ({
    signIn: builder.mutation<SignInResponse, SignInRequest>({
      query: (credentials) => ({
        url: "/auth/signin",
        method: "POST",
        data: credentials,
      }),
    }),

    me: builder.query<MeResponse, void>({
      query: () => ({
        url: "/auth/me",
        method: "GET",
      }),
    }),

    updateProfile: builder.mutation<UpdateProfileResponse, UpdateProfileRequest>({
      query: (profileData) => ({
        url: "/auth/profile",
        method: "PUT",
        data: profileData,
      }),
    }),

    updatePassword: builder.mutation<UpdatePasswordResponse, UpdatePasswordRequest>({
      query: (passwordData) => ({
        url: "/auth/password",
        method: "PUT",
        data: passwordData,
      }),
    }),

    logout: builder.mutation<LogoutResponse, void>({
      query: () => ({
        url: "/auth/logout",
        method: "POST",
      }),
    }),
  }),
});

export const {
  useSignInMutation,
  useMeQuery,
  useLazyMeQuery,
  useUpdateProfileMutation,
  useUpdatePasswordMutation,
  useLogoutMutation,
} = authApi;