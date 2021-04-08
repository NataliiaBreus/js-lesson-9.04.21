'use strict';
const str = "some string i need";
const capitalize = (str) => {
    return str.split("").map((word)=>{
        word[0].toUpperCase() + word.slice(1)
    }).join("");
}
console.log(capitalize(str));

const sum = (...args) => {
    return args.reduce((accumulator, currentValue)=>{
        if(!Number.isFinite(currentValue)){
            throw new TypeError ('Wrong argument type');
        }
        return accumulator + currentValue;
    });
};
console.log (sum('text', 5, 15, '4'));

