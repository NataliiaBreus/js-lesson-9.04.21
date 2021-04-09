'use strict';
/*
class RangeValidator  {
  /**
   * 
   * @param {*} fromNumber 
   * @param {*} toNumber 
   
  constructor (fromNumber, toNumber) {
      this.fromNumber = fromNumber;
      this.toNumber = toNumber;
  }
      set fromNumber (newFromNumber) {
        this._fromNumber = newFromNumber;
      };
      get fromNumber (){
        return this._fromNumber;
      };
      set toNumber (newToNumber) {
        this._toNumber = newToNumber;
      };
      get toNumber(){
        return this._toNumber;
      }
    if (typeof newfromNumber !== "number" || typeof newtoNumber !== "number"){
        throw new TypeError ("This symbol is not a number!");
      }
    function validate (number) {
      if number >= this.fromNumber && number <= this.toNumber{
        return number;
      }
      throw new TypeError ("Wrong number!");
      
    }
    getRange(){
    return `${this.fromNumber} ${this.toNumber}`;
    }
}

  class Test {
      constructor (val) {
          this.val = val;
          console.log(this.power());
      }
      set val(val){
          if(typeof val !=="number"){
              throw new TypeError();
          }
          this._val = newVal;
      }
      get val(){
          return this._val
      }
  }
*/
  class User {
      constructor (name, surname, age, isBanned){
          this.name = name;
          this.surname = surname;
          this.age = age;
          this.isBanned = isBanned;
      }
      set fullName (newFullName){
          const splittedFullName = newFullName.split("");
          this.name = splittedFullName[0];
          this.surname = splittedFullName[1];
      }
      get fullName(){
          return `${this.name} ${this.surname}`;
      }
      get isAdult(){
          return this.age >=18;
      }
      set isBanned(isBanned){
          if(typeof isBanned ==='boolean'){
              this._isBanned = isBanned;
          }
      }
      get isBanned(){
          return this._isBanned
      }
      static isUser(user) {
          return user instanceof User;
      }
  }

  class Admin extends User {
      constructor (name, surname, age) {
          super (name, surname, age, false)
      }
      ban(user){
if (!User.isUser(user)){
    throw new TypeError ('Wrong user'); 
}
user.isBanned = true;
      }
      unban(user){
          if (!User.isUser(user)){
              throw new TypeError ('Wrong user');
          }
          user.isBanned = false;
      }
      toggleBan(user){
          if(!User.isUser(user)){
              throw new TypeError ('Wrong user');
          }
          user.isBanned = !user.isBanned;
      }
  }

  const u = new User ("John", "Smith", 25);
  const a = new Admin ('Test', 'Testovich',35);
  

  class Squirrel {
      constructor (name, color) {
          this.name = name;
          this.color = color;
      }
      eat(){
          return `${this.name} is eating`;
      }
      climb(){
          return `${this.name} is climbing`;
      }
  }
  class FlyingSquirrel extends Squirrel{
constructor(name, color, distance){
super(name, color);
this.distance = distance;
}
fly(){
    if(dist>this.distance){
        throw new Error ('Can not fly');
    }
    return `${this.name} is flying`;
}
  }
  const sq = new Squirrel ('Jelly, brown');
  const fsq = new FlyingSquirrel ('Belly', 'black');
  console.log(Squirrel);
  console.log(FlyingSquirrel);

  class Button {
      constructor(width, height, color){
this.width = width;
this.height = height;
this.color = color;
      }
      render(){}
  }

  class WinButton extends Button {
      constructor (width, height,color){
          super(width, height, color)
      }
      render(){
          console.log(`Win: ${this.color} button ${this.width}x${this.height}px rendered`)
      }
  }

  const wb = new WinButton (200,100, 'red');

  class UnixButton extends Button {
    constructor (width, height,color){
        super(width, height, color)
    }
    render(){
        console.log(`Unix: ${this.color} button ${this.width}x${this.height}px rendered`)
    }
}

class ButtonFactory {
    constructor (os){
        this.os = os;
    }
    createButton(){
        switch (this.os){
            case 'win': {
                this.button = new WinButton (width, height, color);
                break;
            }
            case 'unix': {
                this.button = new UnixButton (width, height, color)
            }
        }
        return this.button;
    }
}

const ubf = new ButtonFactory('unix');
const wbf = new ButtonFactory ('win');

const wbtn = wbf.createButton (300, 100, 'orange');
const ubtn = ubf.createButton (250, 150, 'red');