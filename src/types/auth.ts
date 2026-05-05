export interface SignInRequest {
  email: string;
  password: string;
}

export interface SignInResponseData {
  access_token: string;
  refresh_token?: string;
  token_type: string;
  expires_in?: number;
  expires_at?: number;
  user: User;
}

export interface SignInResponse {
  success: boolean;
  message: string;
  data: SignInResponseData;
}

export interface User {
  id: string;
  aud?: string;
  role?: string;
  email: string;
  email_confirmed_at?: string;
  phone?: string;
  last_sign_in_at?: string;
  app_metadata?: {
    provider?: string;
    providers?: string[];
  };
  user_metadata?: {
    email_verified?: boolean;
  };
  identities?: Identity[];
  created_at?: string;
  updated_at?: string;
  confirmed_at?: string;
}

export interface Identity {
  id: string;
  user_id: string;
  identity_data?: Record<string, any>;
  provider: string;
  last_sign_in_at?: string;
  created_at?: string;
  updated_at?: string;
}

export interface MeResponse {
  user: User;
}

export interface UpdateProfileRequest {
  phone?: string;
  data?: {
    display_name?: string;
    department?: string;
  };
}

export interface UpdateProfileResponse {
  message: string;
  user: User;
}

export interface UpdatePasswordRequest {
  password: string;
}

export interface UpdatePasswordResponse {
  message: string;
}

export interface LogoutResponse {
  message: string;
}