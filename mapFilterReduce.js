//1.map()-->Creates a new array performing some operations on the ori. array
let arr=[2,33,44,55,66]
let a=arr.map((value,index)=>{
    // console.log(value,index)
    return value+index+10//operation to be performed to elements of the array
})
// console.log(a)

//2.filter()-->creates a new array without modifying the original array
//filters out the array according to the user needs
let a2=arr.filter((a)=>{
    return a<10
})
//console.log(a2)//prints the elements less than 10

//3.reduce()-->reduces the array to a single value
let a3=arr.reduce((h1,h2)=>{
    return h1+h2
})
console.log(a3)