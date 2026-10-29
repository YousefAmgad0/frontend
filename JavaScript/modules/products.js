export const products = ["Laptop", "Mouse"];

export function getProductsCount() {
  return products.length;
}

export function addProduct(product) {
  products.push(product);
}

