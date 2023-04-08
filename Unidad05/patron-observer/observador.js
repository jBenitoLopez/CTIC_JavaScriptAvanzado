const subject = {
  // Array que guardara los observadores interesados en este Objeto sujeto
  observers: [],

  // agregar nuevo observador a cambios de este sujeto
  attach: function (observer) {
    this.observers.push(observer);
  },

  // Eliminar observador de este sujeto, así ya no sera notificado
  detach: function (observer) {
    this.observers = this.observers.filter(function (obs) {
      return obs !== observer;
    });
  },

  // notificar a todos los observadores de un cambio
  notify: function (context) {
    this.observers.forEach((observer) => {
      observer.update(context);
    });
  },
};

const observer = {
  update: function (context) {
    console.log(context);
  },
};

// Reuso de código copiando propiedades, para extender objetos
function extend(child, parent) {
  child = child || {};

  // evitar revisar la cadena de prototipos con Object.keys
  Object.keys(parent).forEach((key) => {
    child[key] = parent[key];
  });

  return child;
}

const addButton = document.querySelector("#add");
const control = document.querySelector("#control");
const container = document.querySelector("#container");

// Concrete Subject
const concreteSubject = extend(control, subject);

concreteSubject.addEventListener("click", function (e) {
  console.log(this);
  this.notify(this.checked);
});

addButton.addEventListener("click", function (e) {
  const check = document.createElement("input");
  check.type = "checkbox";

  const checkConcreteObserver = extend(check, observer);
  checkConcreteObserver.update = function (value) {
    this.checked = value;
  };

  checkConcreteObserver.addEventListener("click", () => {
    concreteSubject.detach(checkConcreteObserver);
  });

  concreteSubject.attach(checkConcreteObserver);
  container.append(checkConcreteObserver);
});
