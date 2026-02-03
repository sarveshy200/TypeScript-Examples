function wrapInArray<T>(item: T): T[]{
    return [item];
}

wrapInArray("hello"); // Returns: ["hello"]
wrapInArray(42);      // Returns: [42]
wrapInArray({ key: "value" }); // Returns: [{ key: "value" }]

function pair<A, B>(first: A, second: B): [A, B] {
    return [first, second];
}

pair("age", 30); // Returns: ["age", 30]
pair(true, { name: "Alice" }); // Returns: [true, { name: "Alice" }]    
pair(3.14, [1, 2, 3]); // Returns: [3.14, [1, 2, 3]]


interface Box<T> {
    content:T;
}

const numberBox: Box<number> = { content: 100 };
const stringBox: Box<string> = { content: "Generics" };
const objectBox: Box<{ id: number }> = { content: { id: 1 } };


interface ApiPromise<T>{
    status: number;
    data: T;
}


const res: ApiPromise<{ userId: number; username: string }> = {
    status: 200,
    data: {
        userId: 1,
        username: "user_one"
    }
}