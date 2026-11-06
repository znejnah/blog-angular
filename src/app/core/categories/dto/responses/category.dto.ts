export type CategoryDto = {
  id: string;
  title: string;
  description: string;
  author: {
    id: string;
    email: string;
    firstname: string;
    lastname: string;
  };
};
