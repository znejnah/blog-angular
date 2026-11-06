export const ARTICLE_ENDPOINTS = {
  ALL: '/posts/all',
  NEW_ARTICLE: (categoryId: string) => `/posts/${categoryId}`,
};
