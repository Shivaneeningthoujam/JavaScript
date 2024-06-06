//1.Classical forLoop
let num=[1,2,3,4,5]
for(let i=0;i<num.length;i++){
    // console.log(num[i])
}

//2.For-Each loop
num.forEach((element)=>{
    /*console.log(element*element)//Prints the square of each element in the array*/
}
)

//3.for...of -->efficient and less codes
for(let i of num){
   /* console.log(i)
    console.log(num[i])*/
}

//4.for..in-->Access to the keys of the array or the index
for(let i in num){
    console.log(i)
}
