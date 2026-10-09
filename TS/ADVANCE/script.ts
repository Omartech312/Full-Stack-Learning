// From my understanding type aliases are skeleton of an object
// looks similar to class, but doesnt actually provide behavior
type Employee = {
    readonly id: number,
    name: string,
    retire: (date: Date) => void
}

let employee: Employee = {
    id: 1,
    name: 'Bryant',
    retire: (date: Date) => {
        console.log(date);
    }
}

const typeOut = document.getElementById("typeOut");
if(typeOut){
    typeOut.innerHTML = `${employee.name} you're our employee #${employee.id} as of ${new Date()}`;
}

// Union Type
                // allows you to express having more than one 
                // possible type in this case weight can be a 
                // number or a string
function kgToLbs(weight: number | string): number{
    //Narrowing to each type
    if(typeof weight === 'number'){
        return weight * 2.2;
    }
    return parseInt(weight) * 2.2;
}

document.getElementById("conButton")?.addEventListener("click", () => {
    const input = document.getElementById("conversion") as HTMLInputElement;
    let weight: number = Number(input.value);

    const output = document.getElementById("conResult");
    if(output){
        output.innerHTML = `${weight}kg is equivalent to ${kgToLbs(weight).toPrecision(2)} lbs`;
    }
})

type Person = {
    name: string;
    age: number;
};

type Position = {
    job: string;
    salary: number;
};

// Combines Person and Position into Worker
type Worker = Person & Position;

const worker1: Worker = {
    name: "John",
    age: 25,
    job: "Software Developer",
    salary: 85000
};

const interOut = document.getElementById("interOut");
if(interOut){
    interOut.innerHTML = `${worker1.name} is ${worker1.age} working as a ${worker1.job} with a salary ${worker1.salary}`;
}

// Literal Types
type Metric = 'cm' | 'inch';
let unit: Metric = 'cm';

const litOut = document.getElementById("litOut");
if(litOut){
    litOut.innerHTML = `You can measure objects in ${unit}`;
    unit = 'inch';
    litOut.innerHTML += ` or ${unit}`;
}

// Nullable Types: its just basically using | to add null as a possibility like name: string | null
// in those cases I should take the necessary measures to ensure this null or undefined doesnt break the code.

// Optional Chaining
document.getElementById("chainButton")?.addEventListener("click", () => {
    // here im taking the value provided by the user as HTMLInputElement then selecting the .value
    // input can be either a string or null
    let input: string | null = (document.getElementById("chain") as HTMLInputElement).value;
    const output = document.getElementById("chainOut");

    // if the user doesnt provide any length I set it to null. Technically its not required, but
    // I want to show null literal
    if(input.length == 0) input = null;

    // if output exist then I can display
    if(output){
        display(input, output);
    }
    else{
        //otherwise chainOut was nto found
        console.log("Output id was not found");
    }
});

function display(display: string | null, output: HTMLElement){
    // if display is not null then I print the string
    if(display){
        output.textContent = `${display}`;
    }
    else{
        // Otherwise I print an "error" message instead.
        output.textContent = `Please Provide text`;
    }
}

export {};