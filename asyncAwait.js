async function harry(){
    let delhiWeather= new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("27deg")
        },2000)
    })
    let bangaloreWeather= new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("21deg")
        },5000)
    })
    console.log("fetching Delhi weather...")
    let delhiW=await delhiWeather
    console.log("Delhi weather is  "+delhiW)
    console.log("fetching Bengalore weather...")
    let BengW=await delhiWeather
    console.log("Bengalore weather is  "+BengW)

}
console.log("Welcome to weather forecast")
let a=harry()
a.then((value)=>{
    console.log(value)
})