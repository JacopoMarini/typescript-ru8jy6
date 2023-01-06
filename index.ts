import { apiClient } from './api-client';

let loading = false;

// Resource: carts?limit=3
const fetchCarts = () => {
  return apiClient.get('carts?limit=1');
};

// Resource: products/{id}
const fetchProduct = (id: string) => {
  if (Math.random() > 0.8) throw new Error('Network error');
  return apiClient.get(`products/${id}`);
};

// Resource: users/{id}
const fetchUser = (id: string) => {
  return apiClient.get(`users/${id}`);
};

const main = async () => {
  const [carts] = await fetchCarts();
  console.log(carts);

  for (const product of carts.products) {
    console.log(product);
  }
};

main();

// 1. Recuperare i carrelli (carts)

// 2. Ricostruire il carrello recuperando 'userId' e 'productId' per ogni carrello

// 3. Gestire correttamente il loading

// 4. Gestire correttamente gli errori visualizzando un alert

// 5. Creare un array con top 3 prodotti più comprati
