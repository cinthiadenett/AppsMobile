const arr = [25, 42, 35, 11];
function even(i){
    if (i<=40){
        return false;
    }else{
        return true;
    }
}

function rechazar() {

    var rechazados = arr.filter(even);
    return rechazados;
}
console.log(rechazar());