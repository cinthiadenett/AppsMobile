var numeros = [1,2,3,4,5];

function numerosPares(x){
    return x % 2 == 0;
}

var resultado = numeros.some(numerosPares);

console.log(resultado);