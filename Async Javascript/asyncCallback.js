// consider as to fetch the data from api server
function fetchData(processDataFunc) {
  console.log("fetching data from api.....");
  setTimeout(() => {
    console.log("weather Data of Pune");
    processDataFunc("possibility of rain today");
  }, 5000);
}

function processData(data) {
  console.log("processing data: ", data);
}

fetchData(processData);
