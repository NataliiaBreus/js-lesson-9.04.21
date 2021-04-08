


class Worker {
    /**
     * 
     * @param {*} name 
     * @param {*} surname 
     * @param {*} rate 
     * @param {*} amountOfDays 
     */
    constructor (name, surname, rate, amountOfDays){
        if(typeof rate !== "number" || typeof amountOfDays !== "number"){
            throw new TypeError ("Parameters have unappropriate type");
        }
        if(amountOfDays < 0 || amountOfDays > 31){
            throw new RangeError("Wrong days range");
        }
        this.name = name;
        this.surname = surname;
        this.rate = rate;
        this.amountOfDays = amountOfDays;
    }
    set rate(newRate){
        if(typeof newRate !== "number"){
            throw new TypeError ("Parameter has unappropriate type");
        }
        this._rate = newRate;
    }
    get rate(){
        return this._rate;
    }
    set amountOfDays(newAmountOdDays){
        this._amountOfDays = newAmountOfDays;
    }
    get amountOfDays(){
        return this._amountOfDays;
    }

    get salary(){
        return this.rate * this.amountOfDays;
    }
}

const worker1 = new Worker('Test', 'Testovich', 100, 20);

class Fuel {
    /**
     * 
     * @param {*} volume 
     * @param {*} density 
     */
    constructor (volume, density){
        this.volume = volume;
        this.density = density;
    }
    set volume(newVolume){
        this._volume = newVolume;
    }
    get volume(){
        return this._volume;
    }

    getFuelWeight (){
        return this.volume * this.density;
    }
}

class Auto {
    constructor (model, ownWeight, fuel){
        this.model = model;
        this.ownWeight = ownWeight;
        this.fuel = fuel;
    }
    getFullWeight (){
        return this.ownWeight + this.fuel.getFuelWeight();
    }
}
const benzin = new Fuel(50, 0.9);
const vw = new Auto ('passat', 1200, benzin);



class Friend {
    /**
     * 
     * @param{string} name
     * @param {number} appleAmount
     * @param {Friend} friend
     */
    constructor (name, appleAmount, friend){
        this.name = name;
        this.appleAmount = appleAmount;
        this.friend = friend;
    }
    countAllApples(){
        return this.appleAmount + this.friend.appleAmount;
    }
}

const f1 = new Friend ('John', 5);
const f2 = new Friend ('Bob', 10, f1);
f1.friend = f2;