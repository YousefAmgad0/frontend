const productsCount = document.querySelector("#products-count");
const productForm = document.querySelector("#product-form");
const productName = document.querySelector("#product-name");
const productPrice = document.querySelector("#product-price");
const productTax = document.querySelector("#product-tax");
const productDiscount = document.querySelector("#product-discount");
const productQuantity = document.querySelector("#product-quantity");
const productCategory = document.querySelector("#product-category");
const submitBtn = document.querySelector("#submit-btn");
const searchInput = document.querySelector("#search-input");
const deleteAllBtn = document.querySelector("#delete-all-btn");
const productsTable = document.querySelector("#products-table");
const emptyMessage = document.querySelector("#empty-message");

//Create Product
let productsArr = JSON.parse(localStorage.getItem("products")) || [];
let editingProductId = null;
renderProducts();

function clearInputValues() {
  productForm.reset();
}
function resetForm() {
  clearInputValues();
  editingProductId = null;
  submitBtn.textContent = "+ Add Product";
}
function saveProducts() {
  localStorage.setItem("products", JSON.stringify(productsArr));
}
productForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let name = productName.value.trim();
  let category = productCategory.value;
  // Convert values to numbers
  let price = Number(productPrice.value);
  let tax = Number(productTax.value);
  let discount = Number(productDiscount.value);
  let quantity = Number(productQuantity.value);

  // Check empty fields >> Validations
  if (
    name === "" ||
    productPrice.value.trim() === "" ||
    productTax.value.trim() === "" ||
    productDiscount.value.trim() === "" ||
    productQuantity.value.trim() === "" ||
    category === ""
  ) {
    alert("Please fill in all fields");
    return;
  }

  // Check valid numbers >> Validations
  if (
    !Number.isFinite(price) ||
    !Number.isFinite(tax) ||
    !Number.isFinite(discount) ||
    !Number.isFinite(quantity)
  ) {
    alert("Please enter valid numbers");
    return;
  }

  // Check valid product values   >> Validations
  if (price <= 0 || tax < 0 || discount < 0 || quantity <= 0) {
    alert("Please enter valid product values");
    return;
  }

  if (!Number.isInteger(quantity)) {
    alert("Quantity must be a whole number");
    return;
  }

  if (discount > 100) {
    alert("Discount cannot exceed 100%");
    return;
  }
  //                    End Validations
  /*                           ***                           */
  if (editingProductId === null) {
    //create Product
    const product = {
      id: crypto.randomUUID(),
      name,
      price,
      tax,
      discount,
      quantity,
      category,
    };
    productsArr.push(product);
  } else {
    //update Product
    const product = productsArr.find((product) => {
      return editingProductId === product.id;
    });
    if (product) {
      product.name = name;
      product.price = price;
      product.tax = tax;
      product.discount = discount;
      product.quantity = quantity;
      product.category = category;
    }
  }
  saveProducts();
  searchProducts();
  resetForm();
  // console.log(productsArr); // 3
});

// Create table cells safely using textContent
function createCell(value) {
  const cell = document.createElement("td");
  cell.textContent = value;
  return cell;
}
// Rendering
function renderProducts(products = productsArr) {
  productsCount.textContent = productsArr.length;
  productsTable.innerHTML = "";
  if (productsArr.length === 0) {
    emptyMessage.style.display = "block";
    emptyMessage.textContent = "No Products Added Yet";
  } else if (products.length === 0) {
    emptyMessage.style.display = "block";
    emptyMessage.textContent = "No Products Found";
  } else {
    emptyMessage.style.display = "none";
  }

  products.forEach((product, index) => {
    const row = document.createElement("tr");
    const discountedPrice = product.price * (1 - product.discount / 100);
    const priceAfterTax = discountedPrice * (1 + product.tax / 100);
    const total = priceAfterTax * product.quantity;
    /*  بتعرضنا لصغره ال Cross-Site Scripting (XSS)
      row.innerHTML = `
      <td>${index + 1}</td>
      <td>${product.name}</td>
      <td>${product.category}</td>
      <td>${product.price}</td>
      <td>${product.tax}</td>
      <td>${product.discount}</td>
      <td>${product.quantity}</td>
      <td>${total}</td>
      <td>
        <div class="actions">
          <button class="btn-edit" data-id="${product.id}">Edit</button>
          <button class="btn-delete" data-id="${product.id}">Delete</button>
        </div>
      </td>
    `;*/

    const categoryCell = document.createElement("td");
    const categoryBadge = document.createElement("span");

    categoryBadge.className = "category-badge";
    categoryBadge.textContent = product.category;

    categoryCell.appendChild(categoryBadge);

    row.append(
      createCell(index + 1),
      createCell(product.name),
      categoryCell,
      createCell(product.price),
      createCell(product.tax),
      createCell(product.discount),
      createCell(product.quantity),
      createCell(total),
    );

    // Create action buttons
    const actionsCell = document.createElement("td");
    const actionsDiv = document.createElement("div");
    actionsDiv.className = "actions";

    const editBtn = document.createElement("button");
    editBtn.type = "button";
    editBtn.className = "btn-edit";
    editBtn.dataset.id = product.id;
    editBtn.textContent = "Edit";

    const deleteBtn = document.createElement("button");
    deleteBtn.type = "button";
    deleteBtn.className = "btn-delete";
    deleteBtn.dataset.id = product.id;
    deleteBtn.textContent = "Delete";

    actionsDiv.append(editBtn, deleteBtn);
    actionsCell.append(actionsDiv);
    row.append(actionsCell);

    productsTable.appendChild(row);
  });
}

// Delete Product
productsTable.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn-delete")) {
    const productId = e.target.dataset.id;

    if (editingProductId === productId) {
      resetForm();
    }

    productsArr = productsArr.filter((product) => {
      return product.id !== productId;
    });

    saveProducts();
    searchProducts();
  }
});
// Delete All Products
deleteAllBtn.addEventListener("click", () => {
  if (productsArr.length === 0) return;

  const confirmDelete = confirm(
    "Are you sure you want to delete all products?",
  );

  if (confirmDelete) {
    productsArr = [];
    saveProducts();
    resetForm();
    searchProducts();
  }
});

// Edit Product & Update

productsTable.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn-edit")) {
    const productId = e.target.dataset.id;

    const product = productsArr.find((product) => {
      return product.id === productId;
    });
    if (!product) {
      return;
    }
    productName.value = product.name;
    productPrice.value = product.price;
    productTax.value = product.tax;
    productDiscount.value = product.discount;
    productQuantity.value = product.quantity;
    productCategory.value = product.category;
    editingProductId = product.id;
    submitBtn.textContent = "Update Product";

    // console.log(product);
    // console.log(editingProductId);
  }
});

// Search Products
function searchProducts() {
  const targetVal = searchInput.value.trim().toLowerCase();

  const productFilters = productsArr.filter((prod) => {
    return (
      prod.name.toLowerCase().includes(targetVal) ||
      prod.category.toLowerCase().includes(targetVal)
    );
  });

  renderProducts(productFilters);
}

//search
searchInput.addEventListener("input", searchProducts);
