class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    presentarse() {
        return "Mi nombre es " + this.nombre + " y tengo " + this.edad + " años";
    }
}
var persona = new Persona("Noemi", 55);
console.log(persona.presentarse()); 