const product = {
  title: "Laptop",
  price: 30000,
  category: "Electronics",
};

Object.entries(product).forEach(([key, value]) => {
  console.log(`${key} → ${value}`);
});
