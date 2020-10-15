const notasCurso = [[5,5,5,5],[9,8,5,4],[3,2,3,6],[1,9,1,4]];
for (let i of notasCurso){
    const result = i.every((element) => element >= 4)

    if(result){
        const aprobo = i.filter(element => element >= 4)
        console.log(aprobo);
    }
}