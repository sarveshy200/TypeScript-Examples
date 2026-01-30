// class Chai{
//     flavour: string;
//     // price : number;

//     // constructor(flavour:string, price:number){
//     //     this.flavour = flavour;
//     //     this.price = price;
//     // }

//     constructor(flavour:string){
//         this.flavour = flavour;
//         console.log(this);
//     }
// }

// const masalaChai = new Chai("sweet");
// masalaChai.flavour = "spicy";




class Chai {
    public flavour:string = "sweet";

    private sccretIngredient: string = "cardamom";

    reveal(){
        console.log(`The secret ingredient is ${this.sccretIngredient}`);
    }



}

class Shop {
    protected shopName: string = "Chai Point";
}


class Branch extends Shop{
    getName(){
        console.log(`Branch of ${this.shopName}`);
    }
}

const masalaChai = new Chai();
masalaChai.reveal();
// masalaChai.sccretIngredient = "ginger"; // Error: Property 'sccretIngredient' is private and only accessible within class 'Chai'.



class Walet{
    #balance: number = 1000;

    getBalance(){
        console.log(`The balance is ${this.#balance}`);
    }
}

const myWalet = new Walet();
myWalet.getBalance();
// myWalet.#balance = 500; // Error: Private field '#balance' must be declared in an enclosing class


class Cup{
    readonly capacity: number;
    constructor(capacity: number){
        this.capacity = capacity;
    }
}

const myCup = new Cup(250);
// myCup.capacity = 300; // Error: Cannot assign to 'capacity' because it is a read-only property.


class ModernChai {
    private _sugar = 2

    get sugar(){
        return this._sugar;
    }

    set sugar(value: number){
        if(value < 0){
            console.log("Sugar level cannot be negative");
            return;
        }
        this._sugar = value;
    }
}

const myChai = new ModernChai();
console.log(myChai.sugar);
myChai.sugar = 5;
console.log(myChai.sugar);
myChai.sugar = -3;



class EkChai {
    static ShopName: string = "Ek Chai Shop";
    constructor(public flavour: string){}
}

const chai1 = new EkChai("Masala");
console.log(EkChai.ShopName);


abstract class Drink {
    abstract make(): void;
}


class MyChai extends Drink {
    make(){
        console.log("Making Chai");
    }
}


class Heater{
    heat(){}
}

class ChaiMaker{
    constructor(private heater: Heater){}

    makeChai(){
        this.heater.heat();
        console.log("Chai is made");
    }
}