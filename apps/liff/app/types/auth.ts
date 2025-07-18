export type SignInCredential = {
  id: string;
};

export interface AuthState {
  token: string | null;
  refreshToken: string | null;
  expiresAt?: string | number | null;
  isAuthenticated?: boolean;
}
