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