// Write your code here
// Task 2: product inventory array
const products = ["Laptop", "Phone", "Headphones", "Monitor"];

// Task 3: log the first product
function logFirstProduct() {
  console.log(products[0]);
}

// Task 4: add a new product
function addProduct(productName) {
  products.push(productName);
}

// Task 5: update a product's name by its index
function updateProductName(index, newName) {
  products[index] = newName;
}

// Task 6: remove the last product
function removeLastProduct() {
  products.pop();
}

// Export for testing (works in Node/CodeGrade)
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    products,
    logFirstProduct,
    addProduct,
    updateProductName,
    removeLastProduct,
  };
}


// Export the necessary parts for testing
module.exports = {
  logFirstProduct: typeof logFirstProduct !== 'undefined' ? logFirstProduct : undefined,
  addProduct: typeof addProduct !== 'undefined' ? addProduct : undefined,
  updateProductName: typeof updateProductName !== 'undefined' ? updateProductName : undefined,
  removeLastProduct: typeof removeLastProduct !== 'undefined' ? removeLastProduct : undefined,
  products
};
