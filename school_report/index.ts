const p1 = 6;
const p2 = 1;
const p3 = 6;

function  calcMedia (p1: number, p2:number, p3:number) {
    let media = ((p1 * 2) + (p2 * 3) + (p3 * 5))/10;
    if (media >= 6){
        console.log("Aprovado")
    }else {
        console.log("Reprovado")
    }
}

calcMedia(p1, p2, p3);

// console.log("Hello World!!")