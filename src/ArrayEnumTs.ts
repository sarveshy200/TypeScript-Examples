const chaiFlavor: string[] = [
  "Amaretto",
  "Apple",];

const chaiPrice: number[] = [
  4.5,
  3.0,];

const rating: Array<number> = [5, 4];

type Chai = {
    name:string;
    price:number;
}

const menu:Chai[] = [
    {name: "Masala", price: 4.5},
    {name: "Ginger", price: 3.0}
]

const cities:readonly string []= ["Pune", "Mumbai", "Bangalore"];
// cities.push("Chennai"); // Error: Cannot add to a readonly array


const table:number[][] = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];



let chaiType: [string, number];
chaiType = ["Cardamom", 5.0]; // Correct
// chaiType = [5.0, "Cardamom"]; // Error: Type 'number' is not assignable to type 'string' 


let userInfo: [number, string, boolean?];
userInfo = [101, "Alice"]; // Correct
// userInfo = ["Alice", 101, true]; // Error: Type 'string' is not assignable to type 'number'


const location:readonly [number, number] = [18.5204, 73.8567];
// location[0] = 19.0000; // Error: Cannot assign to '0' because it is a read-only property

const chaiItems:[name:string, price:number] = ["Vanilla", 4.0];


enum CupSize {
    SMALL,
    MEDIUM,
    LARGE
}

const selectedSize: CupSize = CupSize.MEDIUM;


enum Status {
    PENDING = 100,
    SERVED,
    PAID
}

const orderStatus: Status = Status.SERVED;


enum ChaiType {
    BLACK = "Black Chai",
    GREEN = "Green Chai",
    HERBAL = "Herbal Chai"
}
function getChaiType(type: ChaiType) {
    console.log(`Selected Chai Type: ${type}`);
}

getChaiType(ChaiType.GREEN);
// getChaiType("Oolong"); // Error: Argument of type '"Oolong"' is not assignable to parameter of type 'ChaiType'.

enum RandomEnum {
    FIRST,
    SECOND = 10,
}


const enum Sugar {
    LOW = 1,
    MEDIUM = 2,
    HIGH = 3
}

const s = Sugar.MEDIUM;


let t:[string,number] = ["Test", 123];
t.push("Another"); // Allowed