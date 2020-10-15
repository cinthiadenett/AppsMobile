
var numeros = [8,6,2,4];

function aprobo(x){
    return x >= 4;
}

var resultado = numeros.every(aprobo);

console.log(resultado);
