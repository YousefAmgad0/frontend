/*
2. المطلوب منك

اكتب الكود اللي ينفذ المهام دي بالترتيب:

1. تنظيف أسماء المنتجات

اعمل Trim للمسافات الزيادة في بداية ونهاية كل title.

2. تحويل أنواع البيانات

حوّل price وstock إلى Numbers بدل Strings.

3. إنشاء قائمة المنتجات المتاحة

أنشئ Array جديدة فيها المنتجات اللي stock عندها أكبر من صفر.

4. استخراج أسماء المنتجات الغالية

أنشئ Array تحتوي على أسماء المنتجات اللي سعرها أكبر من 2000 فقط.

5. حساب إجمالي قيمة المخزون

احسب مجموع price × stock لكل المنتجات، مع مراعاة الكمية المتاحة.

6. ترتيب المنتجات بالسعر

أنشئ قائمة مرتبة من الأعلى سعرًا للأقل، من غير ما تغيّر ترتيب الـ Array الأصلية.

*/
const products = [
  {
    id: 1,
    title: "  Wireless Headphones ",
    price: "2500",
    category: "Electronics",
    stock: "12",
    rating: 4.5,
    createdAt: "2026-09-20T10:30:00.000Z",
  },
  {
    id: 2,
    title: "Gaming Mouse",
    price: "1200",
    category: "Electronics",
    stock: "0",
    rating: 4.2,
    createdAt: "2026-09-25T14:00:00.000Z",
  },
  {
    id: 3,
    title: "Office Chair",
    price: "4500",
    category: "Furniture",
    stock: "5",
    rating: 4.8,
    createdAt: "2026-09-15T09:00:00.000Z",
  },
  {
    id: 4,
    title: "  USB Cable ",
    price: "150",
    category: "Accessories",
    stock: "30",
    rating: 3.9,
    createdAt: "2026-09-28T12:00:00.000Z",
  },
  {
    id: 5,
    title: "Mechanical Keyboard",
    price: "3200",
    category: "Electronics",
    stock: "8",
    rating: 4.7,
    createdAt: "2026-09-22T16:00:00.000Z",
  },
];
const cleanedProducts = products.map((product) => ({
  ...product,
  title: product.title.trim(),
  price: Number(product.price),
  stock: Number(product.stock),
}));

let availableProducts = cleanedProducts.filter((product) => product.stock > 0);
let expensiveProducts = cleanedProducts
  .filter((product) => product.price > 2000)
  .map((product) => product.title);
console.log(availableProducts);
console.log(expensiveProducts);

let totalPrice = availableProducts.reduce((total, product) => {
  return total + product.price * product.stock;
}, 0);
console.log(totalPrice);

let sortedArray = [...cleanedProducts].sort((a, b) => b.price - a.price);
console.log(sortedArray);

let highestRated = cleanedProducts.reduce((highest, product) => {
  if (product.rating > highest.rating) {
    return product;
  }
  return highest;
});
console.log(highestRated);

const products2 = [
  { title: "Phone", category: "Electronics" },
  { title: "Laptop", category: "Electronics" },
  { title: "Chair", category: "Furniture" },
];

const groupedProducts = products2.reduce((result, prod) => {
  if (!result[prod.category]) {
    result[prod.category] = [];
  }
  result[prod.category].push(prod);
  return result;
}, {});
console.log(groupedProducts);

const categories = [
  "Electronics",
  "Furniture",
  "Electronics",
  "Accessories",
  "Electronics",
  "Furniture",
];

const countCateg = categories.reduce((result, prod) => {
  if (!result[prod]) {
    result[prod] = 0;
  }
  result[prod]++;
  return result;
}, {});
console.log(countCateg);

const products3 = [
  { title: "Phone", category: "Electronics", price: 10000 },
  { title: "Laptop", category: "Electronics", price: 30000 },
  { title: "Chair", category: "Furniture", price: 4500 },
  { title: "Desk", category: "Furniture", price: 3000 },
  { title: "Mouse", category: "Electronics", price: 1500 },
];

const totalByCategory = products3.reduce((result, prod) => {
  if (!result[prod.category]) {
    result[prod.category] = 0;
  }
  result[prod.category] += prod.price;

  return result;
}, {});
console.log(totalByCategory);

const orders = [
  { customer: "Yousef", total: 500 },
  { customer: "Ahmed", total: 300 },
  { customer: "Yousef", total: 700 },
  { customer: "Omar", total: 200 },
  { customer: "Ahmed", total: 400 },
];
const totalByOrders = orders.reduce((result, prod) => {
  if (!result[prod.customer]) {
    result[prod.customer] = 0;
  }
  result[prod.customer] += prod.total;
  return result;
}, {});

console.log(totalByOrders);

const customProduct = cleanedProducts.findIndex((ele) => {
  return ele.id == 4;
});
console.log(customProduct);

const product1 = {
  title: "Laptop",
  price: 30000,
  category: "Electronics",
  stock: 5,
};

for (const [key, value] of Object.entries(product1)) {
  console.log(`${key} > ${value}`);
}

const products4 = [
  { title: "Phone", category: "Electronics" },
  { title: "Laptop", category: "Electronics" },
  { title: "Chair", category: "Furniture" },
  { title: "Mouse", category: "Electronics" },
  { title: "Desk", category: "Furniture" },
];

const uniArr = [...new Set(products4.map((ele) => ele.category))];

console.log(uniArr);

/**************************************************************************** */
const products5 = [
  {
    title: "Phone",
    createdAt: "2026-09-20T10:30:00.000Z",
  },
  {
    title: "Laptop",
    createdAt: "2026-09-25T14:00:00.000Z",
  },
  {
    title: "Chair",
    createdAt: "2026-09-15T09:00:00.000Z",
  },
];
const newestProduct = products5.reduce((newest, product) => {
  return new Date(product.createdAt) > new Date(newest.createdAt)
    ? product
    : newest;
});
/**************************************************************************** */

const product2 = {
  id: 1,
  title: "Laptop",
  price: 30000,
  category: "Electronics",
  stock: 5,
};

const copyProd = { ...product2 };
copyProd.price = product2.price - 2000;

/*********************************************************** */
const product3 = {
  id: 1,
  title: "Laptop",
  price: 30000,
  category: "Electronics",
  stock: 5,
};

const { title, ...other } = product3;
console.log(title);
console.log(other);

/************ */
const prices = [1000, 2000, 3000, 4000, 5000];
const [first, second, ...other2] = prices;

/*********************************************LOcal Strorage************************************** */
const product4 = {
  id: 1,
  title: "Laptop",
  price: 30000,
  category: "Electronics",
  stock: 5,
};
const savedProduct = JSON.stringify(product4);
const restoredProduct = JSON.parse(savedProduct);

//set item
localStorage.setItem("Laptop", JSON.stringify(product4));
//get Item
const productAgain = localStorage.getItem("Laptop");
const savedProductAgain = JSON.parse(productAgain);

console.log(restoredProduct.title);
console.log(restoredProduct.price);

const responseData = [
  {
    id: 1,
    title: "Laptop",
    price: "30000",
    stock: "5",
    category: "Electronics",
  },
  {
    id: 2,
    title: "Mouse",
    price: "1200",
    stock: "0",
    category: "Electronics",
  },
  {
    id: 3,
    title: "Chair",
    price: "4500",
    stock: "3",
    category: "Furniture",
  },
];

const availableProducts2 = responseData
  .map((ele) => ({
    ...ele,
    price: Number(ele.price),
    stock: Number(ele.stock),
  }))
  .filter((prod) => prod.stock > 0);
console.log(availableProducts2);

/*********************************************** */
// const orders2 = [
//   {
//     id: 1,
//     customer: "Yousef",
//     total: "2500",
//     status: "completed",
//     createdAt: "2026-09-20T10:00:00.000Z",
//   },
//   {
//     id: 2,
//     customer: "Ahmed",
//     total: "5000",
//     status: "pending",
//     createdAt: "2026-09-25T14:00:00.000Z",
//   },
//   {
//     id: 3,
//     customer: "Yousef",
//     total: "3200",
//     status: "completed",
//     createdAt: "2026-09-28T12:00:00.000Z",
//   },
// ];

// const completedOrders = orders2
//   .filter((order) => order.status === "completed")
//   .map((order) => ({
//     id: order.id,
//     customer: order.customer,
//     total: Number(order.total),
//   }));

// console.log(completedOrders);

/******************************************* */

const orders3 = [
  {
    id: 1,
    customer: "Yousef",
    total: "2500",
    status: "completed",
    category: "Electronics",
    createdAt: "2026-09-20T10:00:00.000Z",
  },
  {
    id: 2,
    customer: "Ahmed",
    total: "5000",
    status: "pending",
    category: "Electronics",
    createdAt: "2026-09-25T14:00:00.000Z",
  },
  {
    id: 3,
    customer: "Yousef",
    total: "3200",
    status: "completed",
    category: "Electronics",
    createdAt: "2026-09-28T12:00:00.000Z",
  },
  {
    id: 4,
    customer: "Mona",
    total: "1500",
    status: "completed",
    category: "Furniture",
    createdAt: "2026-09-18T09:00:00.000Z",
  },
];

const completedOrders2 = orders3
  .filter((ele) => ele.status == "completed")
  .map((ele) => ({
    id: ele.id,
    customer: ele.customer,
    total: Number(ele.total),
    category: ele.category,
  }));
const totalOrders = completedOrders2.reduce((total, prod) => {
  return total + prod.total;
}, 0);

const uniqueCustomers = [
  ...new Set(completedOrders2.map((ele) => ele.customer)),
];

const newestOrders = orders3.reduce((newest, prod) => {
  return new Date(newest.createdAt) > new Date(prod.createdAt) ? newest : prod;
});
console.log(completedOrders2, "order2");
console.log(uniqueCustomers);
console.log(totalOrders);
console.log(newestOrders, "Newest Order");
