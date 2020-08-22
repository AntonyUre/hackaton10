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

function challenge4(){
    
    let a = document.getElementById("a-4").value;
    let b = document.getElementById("b-4").value;
    let c = document.getElementById("c-4").value;
    let d = document.getElementById("d-4").value;
        
    operation = (a + b + c + d);
    
    document.getElementById("reply4").value = operation;
}

function challenge5(){
}

function challenge6(){
    
    let a = document.getElementById("a-6").value;

    document.getElementById("reply6").value = `min ${Math.min(...a)} max ${Math.max(...a)}`;
}

function challenge7(){
    
    let a = document.getElementById("a-7").value;

    operation = (`(${a.slice(0,3)}) ${a.slice(3,6)} - ${a.slice(6,9)}`)

    document.getElementById("reply7").value = operation;
}

function challenge8(){

    function findLargestNums([...rest1], [ ...rest2], [ ...rest3] ){
        let maxValue1 = Math.max(...rest1);
        let maxValue2 = Math.max( ...rest2);
        let maxValue3 = Math.max( ...rest3);   
    
        let  resultado = [maxValue1,  maxValue2, maxValue3];
        return resultado;
    }
    
    operation = findLargestNums([4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]);

    document.getElementById("reply8").value = operation;
}

function challenge9(){
    
    let a = document.getElementById("a-9").value;

    operation = ` ${a.charAt(0)} ,  ${a.charAt(a.length-1)}`;

    document.getElementById("reply9").value = operation;
}

function challenge10(){
    
    let a = document.getElementById("a-10").value;

    operation = Object.entries(a);

    document.getElementById("reply10").value = operation;
}

function challenge11(){
    
    let a = [{name: "John", age: 21,budget: 23000},{name: "Anto", age: 32, budget: 40000}, {name: "Martin", age: 16, budget: 2700}]
    operation = a.reduce((acc, items) => {return acc += items.budget;}, 0)
    document.getElementById("reply11").value = operation;
}

function challenge12(){
    
    let a = [{name:"John"},{name:"Anto"},{name:"Martin"}];

    operation = a.map((e) => e.name);

    document.getElementById("reply12").value = operation;
}

function challenge13(){

    const obj={ likes: 2,  dislikes: 3, followers: 10};
    
    console.log(Object.entries(obj));

    // document.getElementById("reply13").value = operation;
}

function challenge14(){
    
    let sumar = 0
    function suma(...num) {
        for (let i = 0; i < num.length; i++) {
            sumar += Math.pow(num[i],2)
        }
        document.getElementById("reply14").value = sumar;
    }
    operation = suma(2,3,4)
}

function challenge15(){

    let numbers = [2,3,1,0];
    let newNumbers = [] ;
    let cantNumbers = numbers.length ;
    let result = 0 ;

    function multiplicar(numbers,cantNumbers) {
        for (let i = 0; i < numbers.length; i++) {
            result = numbers[i]*cantNumbers
            newNumbers.push(result)
        }
        document.getElementById("reply15").value = newNumbers;
    }

    multiplicar(numbers,cantNumbers)
}

function challenge19(){

    function valor(elemento, tiempos){
        return Array(tiempos).fill(elemento);
    };

    operation = valor(5,5);
    
    document.getElementById("reply19").value = operation;
}

function challenge22(){
    
    let a = document.getElementById("a-22").value;
    operation = a.charAt(a.length - 1).toUpperCase();
    document.getElementById("reply22").value = operation;
}