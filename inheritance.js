class Parent {

    constructor(){

        this.fathername = "Rokibul santo";
    }
}



class Child extends Parent{

    constructor(name){
        super();
        this.name = name;
    }

    getFullName (){

        return this.name + " " + this.fathername;
    }
}

const baby = new Child("Arnold");
const baby2 = new Child("Tom");

console.log(baby.getFullName(),baby2);