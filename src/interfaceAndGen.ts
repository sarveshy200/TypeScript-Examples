interface Chai{
    flavor: string; 
    price: number;
}

const maslaChai: Chai = {
    flavor: "masla",
    price: 50
};


interface Shop{
    readonly id: number;
    name: string;
    
}

const s:Shop = {id:1, name:"chai shop"};
// s.id = 2; // Error: Cannot assign to 'id' because it is a read-only property.



interface DiscountCalculator{
    (price: number): number;
}

const apply50: DiscountCalculator = (p) => p - 50;

console.log(apply50(200)); // Output: 150


interface TeaMachine{
    start(): void;
    stop(): void;
}

const myTeaMachine: TeaMachine = {
    start() {
        console.log("Tea machine started");
    }
    ,
    stop() {
        console.log("Tea machine stopped");
    }
};

myTeaMachine.start();


interface Chairatings{
    [flavor: string]: number;
}


const ratings: Chairatings = {
    masla: 5,
    ginger: 4.5,
    cardamom: 4.8
};


interface User{
    name: string;
}

interface User{
    age: number;
}

const u:User ={
    name: "Alice",
    age: 25
}

interface A {a: string}
interface B {b: string}

interface C extends A, B {
    c: string;
}