let num=[551,2,3,4,6];
let compare=(a,b)=>{
    return b-a //using this return the sorted array in descending order
    //return a-b ->using this makes the array sorted in increasing order
}
//1.Sort()-->Sorts the array in ascending order by default
num.sort(compare);
console.log(num)

let num2=[1,2,3,4,5];
//2.Splice-->Returns the deleted items and modifies the array
let deletedItems=num2.splice(2,2,344,345,346);
//1st arg->index where the elements to be added 
//2nd arg->No of elements to remove
//remaining arg->Elements to be added
console.log(deletedItems)
console.log(num2)  

//3.Slice
//o slices out a piece from an array .It creates a new array
let num3=[3,4,5,6,7,3]
let newArr=num3.slice(2);
console.log(newArr)
