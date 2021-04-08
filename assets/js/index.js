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

const user1 = {
    name: 'John',
    surname: 'Smith',
    age: 21,
    getFullName(){
        return `${this.name} ${this.surname}`
    }
}

function User(name, surname, age){
    this.name = name;
    this.surname = surname;
    this.age = age;
    
}

function UserProto(){
    this.getFullName = function(){
        return `${this.name} ${this.surname}`;
    }
    this.isAdult = function(){
        return this.age >= 18;
    }
}
User.prototype = new UserProto();