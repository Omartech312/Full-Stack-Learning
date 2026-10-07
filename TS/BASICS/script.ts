// You dont always have to annotate the data type of a variable
// For example if you declare and init a variable it will automatically assume
// the data type based on the given value

// number
//let sales = 123_456_789;

// string
//let course = `TypeScript`;

//assumes boolean
//let check = true;

// if you just declare without initializing it assumes type: any
//let level;

// any represents any type of value which means it can be set to any data type
// but it goes against the purpose of type script, so its best to use it as little as possible
//level = 1;
//level = 'a';

// =======================================================================
// Arrays

// one incredible feature typescript offers is displaying methods related to the data type
let numbers: number[] = [12345,200000,342465];
const arrayOut = document.getElementById("arrayOut");

// for example since it knows numbers is an array of numbers when I write n. it provides me a list of methods
// I can use related to numbers: .toExponential, toFixed, toPrecision, etc.
if(arrayOut){
    numbers.forEach(n => arrayOut.innerHTML += `${n.toExponential()}<br>`);
}

// ====================================
// Tuple
// they can be any size. Howver you must specify the data type
let author: [string, number] = ["Omar", 22];
console.log(author[0]);

// This is one of the reknown issues of tubles in type Script. Even though I decleared a 2 value tuple Im pushing a third one without specifying the data type.
author.push("Issue");

const tupOut = document.getElementById("tupleOut");

if(tupOut){
    tupOut.innerHTML = `My name is ${author[0]} and I'm ${author[1]} years old`; 
}

// this looks similar to C
const enum values { one, pi = 3.1416, e = 2.711828, logTwo = 0.69315 };

const enumOut = document.getElementById("enumOut");

if(enumOut){
    enumOut.innerHTML = `My enum contains multiple important mathematical numbers such as: one ${values.one}, pi ${values.pi}, e ${values.e} and log2 ${values.logTwo}`;
}

// the enum name in needed to access its properties
//console.log(values.one, values.pi);


// lets the program the declaration above will belong to this file only instead of being shared among multiple .ts files
export {};