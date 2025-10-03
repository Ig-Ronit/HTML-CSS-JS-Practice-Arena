const URL =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&symbols=eth";

fetch(URL).then((data) => {
  data = data.json(); // stream
  data.then((result) => {
    console.log(result);
  });
});