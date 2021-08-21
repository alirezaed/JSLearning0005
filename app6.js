// const person ={
//     name:'ali',
//     address:{
//         street:'bahar',
//         city:'tehran'
//     },
//     age:12
// }

// const arr = [person,person]


// const str = JSON.stringify(arr);

// const obj = JSON.parse(str);

// console.log(obj);


// let xhttp = new XMLHttpRequest();
// xhttp.onreadystatechange = function(){
//     if (this.readyState && this.status == 200){
//         document.getElementsByTagName('body')[0].innerText = this.responseText;
//     }
// }

// xhttp.open("POST","http://aedalat.ir/order/GetAllOrders");
// xhttp.send();

const xx = fetch('http://aedalat.ir/order/GetAllOrders',{
    headers:{
        'Content-Type': 'application/json'
    },
    method:'post',
    body:{

    }
})


const yy = xx.then(result=>{
    return result.json();
})

yy.then(data=>{
    console.log(data);

})