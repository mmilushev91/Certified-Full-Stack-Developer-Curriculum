const inventory = [];

function findProductIndex(name) {
  const inventoryLen = inventory.length;
  for (let i = 0; i < inventoryLen; i++) {

    const currentProduct = inventory[i];

    if (currentProduct.name === name.toLowerCase()) {
      return i;
    }
  }

  return -1;
}

function addProduct(product) {
  const originalName = product.name; // Save the original name before transforming it
  product.name = product.name.toLowerCase();

  const inventoryProduct = inventory.find(el => el.name === product.name);

  if (inventoryProduct) {
    inventoryProduct.quantity += product.quantity;
    console.log(`${originalName.toLowerCase()} quantity updated`); // Log with original name (in lowercase)
  } else {
    inventory.push(product);
    console.log(`${originalName.toLowerCase()} added to inventory`);
  }
}

function removeProduct(name, quantity) {
  const product = inventory.find(obj => obj.name === name);

  if (!product) {
    console.log(`${name} not found`);
  }

  else if (product.quantity < quantity) {
    console.log(`Not enough ${name} available, remaining pieces: ${product.quantity}`);
  }

  else if (product.quantity === quantity) {
    inventory.splice(inventory.indexOf(product), 1);

  }
}
