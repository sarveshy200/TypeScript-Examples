const chai = {
    name: "chai",
    price: 30,
    isHot: true
}

// {
//     name:string,
//     price:number,
//     isHot:boolean
// }


let tea:{
    name:string,
    price:number,
    isHot:boolean
};

tea = {
    name : "milk tea",
    price : 25,
    isHot : false
}


type Tea = {
    name:string,
    price:number,
    ingredients:string[]
}

const adrakChai: Tea ={
    name : "adrak chai",
    price : 35,
    ingredients : ["adrak", "water", "milk", "tea leaves"]
}


type Cup = {size:string};
let smallCup: Cup = {size:"small"};

let bigCup = {size:"large", material:"plastic"}; // extra property is allowed

smallCup = bigCup; // ok

type Brew = {brewTime:number}
const coffe = {brewTime: 5, beans: "arabica"};
const chaiBrew: Brew = coffe; // ok


type User = {
    username:string,
    password:string
}

const u:User = {
    username : "admin",
    password : "admin123"
}

type Item = {name:string, price:number}
type Address = {street:string, city:string, zip:string}

type Order = {
    item: Item,
    items:Item[],
    address: Address[]
}


type Chai = {
    name:string,
    price:number,
    isHot:boolean
}

const UpdateChai = (updates: Partial<Chai>)  => {
    console.log("Updating chai with ", updates);
}

UpdateChai({price:32});
UpdateChai({isHot:true});


type ChaiOrder = {
    item?: string,
    quantity?: number
}

const placeorder = (order: Required<ChaiOrder>) => {
    console.log("Placing order for ", order);
}

placeorder({
    item: "masala chai",
    quantity:2,
})

type Chai2 = {
    name:string,
    price:number,
    isHot:boolean
    ingredients:string[]
}

type BasicChaiInfo = Pick<Chai2, "name" | "price">;

const chaiInfo: BasicChaiInfo = {
    name : "ginger chai",
    price : 28
    
}

type ChaiNew = {
    name:string,
    price:number,
    isHot:boolean,
    secretIngredients:string[]    

};

type PublicChaiInfo = Omit<ChaiNew, "secretIngredients">;
const publicChai: PublicChaiInfo = {
    name : "lemon chai",
    price : 26,
    isHot : false
    
};
