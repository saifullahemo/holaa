// document.addEventListener('click', 
// function(){
//     document.getElementById('button');
//     document.querySelector('.bg-modal').style.display = 'flex';
// });
// console.log("hello");

document.getElementById("buttonId").addEventListener("click", function(){
    
    // document.querySelector(".bg-modal").style.display = "unset";
    document.querySelector(".bg-modal").style.display = "flex";
    // document.querySelector(".bg-modal").style.zIndex = "12";
});

document.querySelector(".close").addEventListener("click", 
function(){
    document.querySelector(".bg-modal").style.display = "none";
});