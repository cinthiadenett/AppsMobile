class Persona {

    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    presentarse() {

        return "Hola, mi nombre es " + this.nombre + " y tengo " + this.edad + " años";
    }
}


class Estudiante extends Persona {

    constructor(nombre, edad, profesor) {
        super(nombre, edad);
        this.profesor = profesor;
    }

    estudiando() {
        return "Estudiando con " + this.profesor;
    }

    setProfesor(profesor) {
        this.profesor = profesor
    }
}

class Profesor extends Persona {

    constructor(nombre, edad, estudiantes) {
        super(nombre, edad);
        if(estudiantes) {
            estudiantes.forEach(i => i.setProfesor(nombre));
            this.estudiantes = estudiantes;
        } else {
            this.estudiantes = [];
        }
    }

    enseñando() {
       this.estudiantes.forEach(i => console.log("Le estoy ensañando a " + i.nombre));
    }

    addEstudiante(estudiante) {
        estudiante.setProfesor(this.nombre);
        this.estudiantes.push(estudiante);
    }
}

var Alumnos = [
    new Estudiante("Lucia", 26),
    new Estudiante("Marta", 27),
    new Estudiante("cinthia", 50)
];

var profesor = new Profesor("soledad", 25, Alumnos);
console.log(profesor.presentarse());


profesor.addEstudiante(new Estudiante("Dario", 28));

console.log(profesor.enseñando());
