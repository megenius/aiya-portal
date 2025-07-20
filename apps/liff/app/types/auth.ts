export type SignInCredential = {
  liffId: string;
  IDToken: string;
};

export interface AuthState {
  token: string | null;
  refreshToken: string | null;
  expiresAt?: string | number | null;
  isAuthenticated?: boolean;
}
