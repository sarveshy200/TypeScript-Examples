let subs: number | string  = 10;


let apiRequestStatus: 'pending' | 'success' | 'failed' = 'pending';
apiRequestStatus = 'success';
// apiRequestStatus = 'error'; // Error: Type '"error"' is not assignable to type '"pending" | "success" | "failed"'.      

let airlineSheats : 'aisle' | 'window' | 'middle'  = 'aisle'; 

const orders = ["12", "13", "14"]

let currentorder:string | undefined;

for(let order of orders){
    if(order === "13"){
        currentorder = order;
        break;
    }
    currentorder = "13";

}

console.log(currentorder);