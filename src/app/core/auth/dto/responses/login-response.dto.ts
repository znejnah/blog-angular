export type LoginResponseDto = {
  accessToken: string;
  user: {
    id: string;
    email: string;
    firstname: string;
    lastname: string;
  };
};
