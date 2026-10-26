async function getProducts() {
  try {
    const response = await fetch(
      "https://www.themealdb.com/api/json/v1/1/categories.php",
    );

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    const data = await response.json();
    console.log(data.categories);
  } catch (error) {
    console.error("Failed to fetch categories:", error);
  }
}

getProducts();
