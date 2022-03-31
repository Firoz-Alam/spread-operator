//Spread Operator

const number = [1,2,3,4,5];
const numb = [...number]; // exact copy of number
const newNumber = [...number, 6,7,8,9,10];
console.log(newNumber);
console.log(numb);

//object spreading 

const myObj1 = {
    x : 1,
    y : 2
};

const myObj2 = {
    a: 1,
    b: 2
}


const newMyobj = {...myObj1, ...myObj2};
console.log(newMyobj);