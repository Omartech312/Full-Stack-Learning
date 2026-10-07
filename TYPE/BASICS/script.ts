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
