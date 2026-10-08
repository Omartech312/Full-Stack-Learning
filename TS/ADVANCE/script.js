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
