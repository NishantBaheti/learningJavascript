// // immediately resolved
// var myPromise = Promise.resolve("Foo");

// myPromise.then((res) => {
//   console.log(res);
// });

// // promise object example
// var myPromise = new Promise(function (resolve, reject) {
//   setTimeout(() => resolve(4), 2000);
// });
// myPromise.then((res) => {
//   res += 100;
//   console.log(res);
// });

// promise advanced exmple

function getData(method, url) {
  return new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.onload = function () {
      if (this.status >= 200 && this.status < 300) {
        resolve(xhr.response);
      } else {
        reject({
          status: this.status,
          statusText: this.statusText,
        });
      }
    };

    xhr.onerror = function () {
      reject({
        status: this.status,
        statusText: this.statusText,
      });
    };

    xhr.send();
  });
}

getData("GET", "http://jsonplaceholder.typicode.com/todos")
  .then(function (data) {
    console.log(data);
  })
  .catch(function (err) {
    console.log(err);
  });

  const func = (x, y) => {
    return x + y;
  };
  console.log(func(11, 12));