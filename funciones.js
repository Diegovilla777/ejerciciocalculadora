
let x =sumar(58,7);
console.log("la funcion es: "+x);

function sumar(a,b){
    let result = a+b
    return result;
}

let q = restar(5,2)
console.log("la funcion es: "+q);

function restar(a,b){
    let result = a-b
    return result;
}

let e = divicion(10,2)
console.log("la funcion es: "+e);

function divicion(a,b){
    let result = a/b
    return result;
}



let multiplicar=(a,b)=>{
    let result = a*b
    return result;
}
let r = multiplicar(2,5)
console.log("la funcion es: "+r);



//saludo();
function saludo(){
    console.log("hola desde la funcion de javaScript");
}