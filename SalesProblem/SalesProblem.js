function topProduct(productProfitArray) {
  if (productProfitArray.length === 0) {
    return "No Data";
  }

  let maxProfit = -Infinity;
  let topProduct = "";

  for (const product of productProfitArray) {
    if (product.profit > maxProfit) {
      maxProfit = product.profit;
      topProduct = product.name;
    }
  }

  return topProduct;
}

function bottomProduct(productProfitArray) {
  if (productProfitArray.length === 0) {
    return "No Data";
  }

  let minProfit = Infinity;
  let bottomProduct = "";

  for (const product of productProfitArray) {
    if (product.profit < minProfit) {
      minProfit = product.profit;
      bottomProduct = product.name;
    }
  }

  return bottomProduct;
}

function zeroProfitProduct(productProfitArray) {
  if (productProfitArray.length === 0) {
    return "No Data";
  }

  let closestProfit = Infinity;
  let zeroProfitProduct = "";

  for (const product of productProfitArray) {
    const profit = Math.abs(product.profit);
    if (profit < Math.abs(closestProfit) || (profit === closestProfit && product.profit > 0)) {
      closestProfit = product.profit;
      zeroProfitProduct = product.name;
    }
  }

  return zeroProfitProduct;
}

const productProfits = [
  { name: "Product A", profit: 500 },
  { name: "Product B", profit: 200 },
  { name: "Product C", profit: -100 },
  { name: "Product D", profit: -50 },
  { name: "Product E", profit: 100 },
];

// Output results
const topProductElement = document.getElementById('topProduct');
const bottomProductElement = document.getElementById('bottomProduct');
const zeroProfitProductElement = document.getElementById('zeroProfitProduct');

topProductElement.textContent = `Top Product: ${topProduct(productProfits)}`;
bottomProductElement.textContent = `Bottom Product: ${bottomProduct(productProfits)}`;
zeroProfitProductElement.textContent = `Zero Profit Product: ${zeroProfitProduct(productProfits)}`;