class Camarero {
  constructor(nombre) {
    this.nombre = nombre;
  }

  saludar() {
    console.log(`Hola,soy ${this.nombre}, tu camarero`);
  }

  prepararCoctel(coctel) {
    coctel();
  }
}

const ModuloCocteles = {
  BloodyMary: () => {
    console.log("asíse prepara un Bloody Mary");
  },

  TomCollins: () => {
    console.log("asíse prepara un Tom Collins");
  },

  Margarita: () => {
    console.log("asíse prepara un Margarita");
  },
};

const camarero = new Camarero("Mr. Jenkins");

camarero.saludar();
camarero.prepararCoctel(ModuloCocteles.BloodyMary);
camarero.prepararCoctel(ModuloCocteles.TomCollins);
camarero.prepararCoctel(ModuloCocteles.Margarita);
