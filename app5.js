// const student={
//     average:20,
//     name:'ali'
// }

// const schoolName = "Shahid motahari";

// function getAverage(student){
//     const i = 0;
//     const j = 2;

//     function x(){
//         const fullname = schoolName + " asd";
//         return fullname;
//     }
//     x();
//     return student.average;
// }

// const s = getAverage(student);


function createSum(){

    let k=12;
    let name="asda";

    function calculateSum(...input){
        let s = 0;
        input.forEach(item=>s+= item);
        return s;
    }

    return calculateSum;

}



const sum = createSum();

console.log(sum(2,4,5));
