async function fetchData() {
  const response = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&symbols=etherum");
  const data = await response.json();
  console.log(data);
}

fetchData();