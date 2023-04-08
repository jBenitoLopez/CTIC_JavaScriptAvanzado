var mySingleton = (function () {
  var instance;

  init = function () {
    var privateVar = "privateVar";

    privateFunc = function () {
      console.log("This is private func");
    };

    return {
      publicVar: "public var", // variable pública

      publicFunc: function () {
        // método público
        console.log("This is public func");
      },

      getPrivateVar: function () {
        return privateVar;
      },
    };
  };

  return {
    getInstance: function () {
      if (!instance) {
        instance = init();
      }
      return instance;
    },
  };
})();

var singleton1 = mySingleton.getInstance();
var singleton2 = mySingleton.getInstance();

singleton1.publicFunc();
console.log(singleton1 === singleton2);
