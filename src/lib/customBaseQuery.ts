import axiosInstance from "./axios";
import type { BaseQueryFn } from "@reduxjs/toolkit/query";
import type { AxiosRequestConfig, AxiosError } from "axios";

export const axiosBaseQuery =
  (): BaseQueryFn<
    {
      url: string;
      method?: AxiosRequestConfig["method"];
      data?: AxiosRequestConfig["data"];
      params?: AxiosRequestConfig["params"];
      headers?: AxiosRequestConfig["headers"];
    },
    unknown,
    unknown
  > =>
  async ({ url, method, data, params, headers }) => {
    try {
      const isFormData = data instanceof FormData;
      
      const result = await axiosInstance({
        url,
        method,
        data,
        params,
        headers: isFormData
          ? { ...headers }
          : {
              "Content-Type": "application/json",
              ...headers,
            },
      });
      return { data: result.data };
    } catch (axiosError) {
      const err = axiosError as AxiosError<any>;
      const status = err.response?.status;
      const errorMessage = err.response?.data?.message ?? err.message;

      return {
        error: {
          status,
          message: errorMessage,
          data: err.response?.data,
        },
      };
    }
  };