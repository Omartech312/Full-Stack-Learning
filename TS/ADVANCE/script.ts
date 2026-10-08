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
    typeOut.innerHTML = `${employee.name} you're our employee #${employee.id}`;
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

export {};