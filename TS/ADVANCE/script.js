"use strict";
let employee = {
    id: 1,
    name: 'Bryant',
    retire: (date) => {
        console.log(date);
    }
};
const typeOut = document.getElementById("typeOut");
if (typeOut) {
    typeOut.innerHTML = `${employee.name} you're our employee #${employee.id}`;
}
// Union Type
// allows you to express having more than one 
// possible type in this case weight can be a 
// number or a string
function kgToLbs(weight) {
    //Narrowing to each type
    if (typeof weight === 'number') {
        return weight * 2.2;
    }
    return parseInt(weight) * 2.2;
}
document.getElementById("conButton")?.addEventListener("click", () => {
    const input = document.getElementById("conversion");
    let weight = Number(input.value);
    const output = document.getElementById("conResult");
    if (output) {
        output.innerHTML = `${weight}kg is equivalent to ${kgToLbs(weight).toPrecision(2)} lbs`;
    }
});
