interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}


const fetchData = async () =>{
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        if(!response.ok){
            throw new Error(`HTTP error ${response.status}`);
        }
        const data: Todo = await response.json();
        console.log('Fetched Data:', data);
    }catch(error){
        console.error('Error fetching data:', error);
    }
}