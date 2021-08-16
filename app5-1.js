



// function createAppendLine(){
    
//     let result = "";

//     function appendLine(input){
//         result += input + "\n";
//         return result;
//     }

//     return appendLine;
// }

// const append = createAppendLine();

// append("This is first line.");
// append("This is second line.");
// let x = append("This is third line.");
// console.log(x);

// x = append("This is forth line.");
// console.log(x);


function createCounter(){
    let counter = 0;

    function add(){
        counter++;
        return counter;
    }

    function remove(){
        counter--;
        return counter;
    }
    return {
        add,
        remove
    }
}

const { add,remove } = createCounter();

add();
add();
add();
console.log(add());
remove();
console.log(remove());


const sampleObj={
    id:9,
    title:""
};
//list<sampleObj>
//add(title);
//remove(id);
//getall();