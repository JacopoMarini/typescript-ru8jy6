const BASE_URL = 'https://fakestoreapi.com';

export const apiClient = {
  get: async (resource: string) => {
    const response = await fetch(`${BASE_URL}/${resource}`);
    const result = await response.json();
    return result;
  },
};
