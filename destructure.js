const person = {name:"jack william", age:23, job:"facebooking", gfName:"Ema watson", address:"katabon",friends:["shakib khan","shakrukh khan","Rokibul santo"]};
console.log(person.friends);

const gfName = person.gfName;
console.log(gfName);

const {name,age,address} = person;
console.log(name,age,address);

const freindName = ["Mahdi hasan","parves","noyon"];
const [first,second]=freindName;
console.log([first],[second]);

//complex destructure

const complexObject ={
    name:"kuddus",
    address:"ghulisthan",
    info:{
        leader:"sakku khan"
    }
}

const {leader}=complexObject.info;
console.log(leader);