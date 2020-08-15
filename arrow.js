//Normal function declaration
function add(num1,num2){
    return num1 + num2;
}
const result = add(10,20);
console.log(result);

//varible declare function
const doubleIt = function (num){

    return num * 2;
}
const result2 = doubleIt(5);
console.log(result2);

//arrow funtion

const doubleIt2 = num => num * 2;  // single parameter
const result3 = doubleIt2(50);
console.log(result3);

const add2 = (x,y) => x + y; // Multiple parameter 
const result4 = add2(2,3);
console.log(result4);

const give5 = () => 10; // empty parameter 
const result5 = give5();
console.log(result5);

const doMath = (num1,num2) => {   //Mulpiple line arrow function

    const sum = num1 + num2;
    const diff = num1 - num2;
    const total = sum * diff;
    return total;
}

const result6 = doMath(7,5);
console.log(result6);
