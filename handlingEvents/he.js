let x=function(e){
    alert("Hello World!")
}

let y=function(e){
    alert("Hellopp2")
}
btn.addEventListener('click',x)
btn.addEventListener('click',y)

let a=prompt("Enter a number here")
if(a=="2"){
    btn.removeEventListener('click',x);
}
// Google button handler
document.getElementById("google").addEventListener("click",function(){
    window.location="https://www.google.com";
    win.focus();
})
