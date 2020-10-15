var numeros = [7,8,9];

function contiene(f, a){
    return a.some(num => num == f);
}

console.log(contiene(8,numeros));
