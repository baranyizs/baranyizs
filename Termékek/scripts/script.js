let products = [];

document.getElementById('addButton').addEventListener('click', addProduct);

function addProduct() {
  const productName = document.getElementById('productName').value;
  const productPrice = parseFloat(document.getElementById('productPrice').value);

  if (productName !== '' && !isNaN(productPrice)) {
    products.push({ name: productName, price: productPrice });
    document.getElementById('productName').value = '';
    document.getElementById('productPrice').value = '';
    calculateResults();
  } else {
    alert('Kérlek add meg a termék nevét és érvényes árat!');
  }
}

function calculateResults() {
  if (products.length > 0) {
    const cheapestProduct = products.reduce((prev, current) => (prev.price < current.price) ? prev : current);
    document.getElementById('cheapestProduct').textContent = cheapestProduct.name;

    const totalPrices = products.reduce((acc, current) => acc + current.price, 0);
    const averagePrice = totalPrices / products.length;
    document.getElementById('averagePrice').textContent = averagePrice.toFixed(2);

    const priceDifferences = products.map(product => Math.pow(product.price - averagePrice, 2));
    const priceVariance = Math.sqrt(priceDifferences.reduce((acc, val) => acc + val, 0) / products.length);
    document.getElementById('priceVariance').textContent = priceVariance.toFixed(2);
  }
}