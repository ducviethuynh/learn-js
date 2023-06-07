const sum = 8;
const promiseTest = new Promise((resolve, reject) => {
  // Thực hiện bất đồng bộ
  setTimeout(() => {
    if (sum < 10) {
      reject("Promise rejected");
    }
    resolve("Promise resolved");
  }, 2000);
});

promiseTest
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

// promise: khi sử dụng quá nhiều callback function lồng nhau, sẽ tạo ra callback hell
// tránh callback hell

// promise có từ ES6, giúp quản lý bất đồng bộ tốt hơn
