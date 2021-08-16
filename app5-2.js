// const p1 = new Promise((resolve,reject)=>{
//     // try{

//     //     resolve()
//     // }
//     // catch(e){
//     //     reject()
//     // }
//     console.log('promise called');
//     setTimeout(() => {
//         reject(20);
//     }, 5000);

//     setTimeout(() => {
//         resolve(40);
//     }, 3000);

// });


// p1.then(data=>{
//     console.log(data);
//     return data*2;
// }).then(data=>{
//     console.log(data);
// }).catch(er=>{
//     console.log(er);
// }).finally(()=>{
//     console.log('finaly');
// })


// function dosomething(){
//     return new Promise((resolve,reject)=>{

//         console.log('promise called');
//         setTimeout(() => {
//             reject(20);
//         }, 5000);
    
//         setTimeout(() => {
//             resolve(40);
//         }, 3000);
    
//     });
// }

// dosomething().then();


const p1 = new Promise((resolve,reject)=>{


    setTimeout(() => {
        console.log('P1 after 2');
        resolve('P1 Result');
    }, 4000);
})

const p2 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        console.log('P2 after 4');
        resolve('P2 Result');
    }, 2000);


});

// Promise.all([p1,p2]).then(data=>{
//     console.log(data);
// });

Promise.race([p1,p2]).then(data=>{
    console.log(data);
})