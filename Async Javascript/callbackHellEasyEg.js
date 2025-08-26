function apiCall1(apiCall2Callback) {
  console.log("We are ready to execute API call 1");
  setTimeout(() => {
    console.log("Api call 1 is done");
    console.log("calling API call 2 now");
    apiCall2Callback();
  }, 3000);
}

function apiCall2(apiCall3Callback) {
  setTimeout(() => {
    console.log("Api call 2 is done");
    console.log("calling API call 3 now");
    apiCall3Callback();
  }, 3000);
}

function apiCall3() {
  setTimeout(() => {
    console.log("Api call 3 is done");
  }, 3000);
}

apiCall1(() => {
  apiCall2(() => {
    apiCall3();
  });
});
