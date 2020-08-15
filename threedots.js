const age = [10,12,14,15];
const age2 = [14,18,17,19];
const allAges = age.concat(age2).concat(80,90); //old model
const allAges2 = [age,age2]; // it shows separated array.but i dont see this .
const allAges3 = [...age, 100, ...age2];
console.log(allAges3);

const business= 650;
const minister = 450;
const sochib = 250;

const maximun = Math.max(business,minister,sochib);
console.log(maximun);

//lets check in array 
const dolar =[650,450,250];
const maximun2 = Math.max(...dolar);
console.log(maximun2);