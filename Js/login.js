
let flag = 0;

let arr = document.getElementsByTagName("a");


function color(){
if(flag == 0){
    for (let i = 0; i < arr.length; i++) {
        arr[i].className = "color"; 
        }
    } 
    setTimeout(() => {for (let i = 0; i < arr.length; i++) {
        arr[i].className = "color1"; 
        }}, 2000);
    
    setTimeout(() => {for (let i = 0; i < arr.length; i++) {
        arr[i].className = "color2"; 
        }}, 4000);
        
    setTimeout(() => {for (let i = 0; i < arr.length; i++) {
        arr[i].className = "colorO"; 
        }}, 6000);
}

setTimeout(color, 1000);
