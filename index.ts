import { apiClient } from './api-client';
let loading = false;
const fetchCarts = async () => {
  const carts = await apiClient.get('carts?limit=3');
  return carts;
};
const fetchProductById = async (id: string) => {
  if (Math.random() > 0.8) throw new Error('Network error');
  const product = await apiClient.get(`products/${id}`);
  return product;
};
const fetchUser = (id: string) => {
  return apiClient.get(`users/${id}`);
};
// 1. Recuperare i carrelli (carts)
const simpleMain = async () => {
  const carts = await fetchCarts();
  console.log('simpleMain: ', carts);
};
// 2. Ricostruire il carrello recuperando 'userId' e 'productId' per ogni carrello
const getFullCarts = async () => {
  const carts = await fetchCarts();
  const newCarts = [...carts];
  for (const cart of newCarts) {
    cart.user = await fetchUser(cart.userId);
    const products = await Promise.all(
      cart.products.map(({ productId }: any) => fetchProductById(productId))
    );
    cart.products = products.map((p: any, i: any) => ({
      product: p,
      quantity: cart.products[i].quantity,
    }));
  }
  return newCarts;
};
// 3. Gestire correttamente il loading
const loadingFullCarts = async () => {
  let loading = true;
  console.log('...loading', loading);
  const carts = await getFullCarts();
  console.log(carts);
  loading = false;
  console.log('...done!', loading);
};
loadingFullCarts();
