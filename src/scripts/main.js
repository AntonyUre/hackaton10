function challenge1(){
    
    let a = document.getElementById("a-1").value;
    let b = document.getElementById("b-1").value;
    let c = document.getElementById("c-1").value;

    operation = `Hola mi nombre es ${a} ${b}  y tengo ${c} años`;

    document.getElementById("reply1").value = operation;
}

function challenge2(){
    
    let a = document.getElementById("a-2").value;
    let b = document.getElementById("b-2").value;
    let c = document.getElementById("c-2").value;

    operation = Math.pow(a, 3)+Math.pow(b, 3)+Math.pow(c, 3);

    document.getElementById("reply2").value = operation;
}

function challenge3(){
    
    let a = document.getElementById("a-3").value;

    operation = typeof(a);

    document.getElementById("reply3").value = operation;
}