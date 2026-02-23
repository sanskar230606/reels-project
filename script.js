// let elems = document.querySelectorAll(".elem");
// console.log(elems);
// elems.forEach((e)=>{
//     e.childNodes[3].addEventListener("click",()=>{
//         console.log()
//         e.innerHTML = "sent request";
//     });
// });

let allbtn = document.querySelectorAll("button");
console.log(allbtn);
allbtn.forEach((q)=>{
    q.addEventListener("click",()=>{
        if(q.innerHTML == "add friend"){
            q.innerHTML = "remove friend";
        }
        else{
            q.innerHTML = "add friend";
        }
    });
});

