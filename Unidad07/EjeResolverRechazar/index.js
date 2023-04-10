function helloWorld(ready) {
  return new Promise(function (resolve, reject) {
    if (ready) {
      resolve("Hello World!");
    } else {
      reject("Good bye!");
    }
  });
}

helloWorld(true).then(
  // exec Resolve
  function (value) {
    console.log("1) " + value);
  },
  // exec Reject
  function (value) {
    console.log("2) " + value);
  }
);
