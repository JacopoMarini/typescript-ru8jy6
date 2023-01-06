const BASE_URL = 'https://fakestoreapi.com';

export const apiClient = {
  get: async (resource: string) => {
    const response = await fetch(`${BASE_URL}/${resource}`);
    return response.json();
  },
};
