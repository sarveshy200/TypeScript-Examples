let response:any = "32";

let numericLength:number = (response as string).length;

type Book ={
    name:string
}

let bookString = '{"name":"TypeScript Basics"}';
let bookObject = JSON.parse(bookString) as Book;

console.log(bookObject.name);

const inputElement = document.getElementById("username") as HTMLInputElement;


let value:any;
value = "Hello, TypeScript!";
value = 42;
value = [1,2,3];
value.upperCase();

let newValue: unknown;
newValue = "Hello, TypeScript!";
newValue = 42;
newValue = [1,2,3];
if (typeof newValue === "string") {
    newValue.toUpperCase();
}


try{

}catch(error){
   if(error instanceof Error){
    console.log(error.message);
   }
   console.log("Unknown error", error); 
}


const data:unknown = "chai aur code";
const strData:string = data as string;


type Role =  "admin" | "user" | "guest";

function redirectBasedOnRole(role:Role):void{
    if(role === "admin"){
        console.log("Redirecting to admin dashboard");
        return;
    }
    if(role === "user"){
        console.log("Redirecting to user homepage");
        return;
    }
    if(role === "guest"){
        console.log("Redirecting to guest welcome page");
        return;
    }
    role;
}


function neverReturn():never{
    while(true){}
}