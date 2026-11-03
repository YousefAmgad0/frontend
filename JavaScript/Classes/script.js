class Product {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }
}

const product = new Product("Laptop");

console.log(Object.keys(product));
console.log(Object.keys(Product.prototype));
console.log(product.hasOwnProperty("getName"));
console.log(Product.prototype.hasOwnProperty("getName"));

const Animal = class MyAnimal {
  getName() {
    return MyAnimal.name;
  }
};

const animal = new Animal();

console.log(animal.getName());
console.log(typeof Animal);
console.log(typeof MyAnimal);

class Product1 {
  set price(value) {
    if (value <= 0) {
      throw new Error("Price cannot be zero or negative");
    }
    this._price = value;
  }
  get price() {
    return this._price;
  }
}
const product1 = new Product1();
product1.price = 100;
console.log(product1.price);

const products = [
  { id: 1, name: "Phone", price: 1000, inStock: true },
  { id: 2, name: "Laptop", price: 3000, inStock: false },
  { id: 3, name: "Mouse", price: 500, inStock: true },
  { id: 4, name: "Keyboard", price: 800, inStock: true },
];
const inStockProducts = products
  .filter((product) => product.inStock)
  .reduce((acc, product) => {
    acc += product.price;
    return acc;
  }, 0);
console.log(inStockProducts);
