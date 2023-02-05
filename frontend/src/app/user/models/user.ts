export interface User {
  username: string | null | undefined;
  password: string | null | undefined;
  email: string | null | undefined;
}

export interface LoginRequestMessage {
  username: string | null | undefined;
  password: string | null | undefined;
}
