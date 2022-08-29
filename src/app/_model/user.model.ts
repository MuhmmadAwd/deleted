export interface User {
  data: {
    pharmacyInformation: { pharmacyName: string };
    tokenInformation: { bearerToken: string; expiringDate: string };
  };
  message: string;
  status: boolean;
}
