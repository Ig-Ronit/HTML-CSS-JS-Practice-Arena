function apiCall1(apiCall2Callback) {
  console.log("We are ready to execute API call 1");
  setTimeout(() => {
    console.log("Api call 1 is done");
    apiCall2Callback();
  }, 5000);
}

function apiCall2(apiCall3Callback) {
  console.log("calling API call 2 now");
  setTimeout(() => {
    console.log("Api call 2 is done");
    apiCall3Callback();
  }, 5000);
}

function apiCall3() {
  console.log("calling API call 3 now");
  setTimeout(() => {
    console.log("Api call 3 is done");
  }, 5000);
}

apiCall1(() => {
  apiCall2(() => {
    apiCall3();
  });
});
