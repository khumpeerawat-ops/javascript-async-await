//Exercise #2
let getJohnProfile = () => {
  return new Promise(function (_, reject) {
    setTimeout(
      () =>
        reject({
          errorCode: 500,
          message: "👿 Failed to request data from server",
        }),
      2000
    );
  });
};

// Start coding here

function displayData(data) {
  console.log(data);
}

function displyaError(err) {
  console.log(err);
}
getJohnProfile().then(displayData).catch(displyaError);
