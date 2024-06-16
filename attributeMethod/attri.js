let first=document.getElementById("first");
// 1.getAttribute(name):this method is used too get the value of an attribute
let a=first.getAttribute("class");
console.log(a);//hey

//2.hasAttribute(name):method used to check for existence of an attribute
console.log(first.hasAttribute("class"))//true
console.log(first.hasAttribute("style"))//false

//3.setAttribute(name):method used to set the value of an attribute
// first.setAttribute("hidden","true")
// first.setAttribute("class","hello")

//4.removeAttribute(name): method to remove an attribute
first.removeAttribute("class")

//5.elem.attributes: mmethod to get all the attributes of an element
console.log(first.attributes)