type ChaiOrder = {
    type: string;
    sugar: number;
    strong: boolean;
};


function makeChai(order:ChaiOrder){
    console.log(order);
};

function serveChai(order:ChaiOrder){
    console.log(order);
}

type TeaRecipe = {
    water:number;
    milk:number;
}

// class MasalaChai implements TeaRecipe{
//     water = 100;
//     milk = 50;
// }

interface CupSize {
    size: 'small' | 'medium' | 'large';
}

class Chai implements CupSize{
    size : "small" | "medium" = 'medium';
}

// type Response = {ok: true} | {ok: false}
// class myRes implements Response {
//     ok: boolean = true;
// }


type TeaType = 'black' | 'green' | 'herbal';
function orderChai(t:TeaType){
    console.log(t);
}


type BaseChai = {teaLeaves:number}
type Extra = {masala:number}

type MasalaChai = BaseChai & Extra;

const cup:MasalaChai ={
    teaLeaves:10,
    masala:5
}


type User = {
    username:string;
    bio?:string;
}

const u1:User = {
    username:'alice'
}
const u2:User = {
    username:'bob',
    bio:'I love chai'
}

type Config = {
    readonly appName:string;
    version:string;
}

const config:Config = {
    appName:'ChaiApp',
    version:'1.0.0'
};
// config.appName = 'NewChaiApp'; // Error: Cannot assign to 'appName' because it is a read-only property.

