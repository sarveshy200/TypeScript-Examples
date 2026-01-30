function makeChai(type: string, cups: number) {
    console.log(`Making a cup of ${type} with ${cups} cups.`);
}

makeChai("Masala Chai", 2);

function getChaiPrice(): number {
    return 5;
}

function makeOrder(order: string) {
    if (!order) return null;
    return `Order received for ${order}`;
}

function logChai():void{
    console.log("Chai is being prepared.");
}


function orderChai(type?:string){

}


function createChai(order:{
    type:string,
    sugar:number,
    size: "small" | "medium" | "large"
}):number{
    return 10;
}