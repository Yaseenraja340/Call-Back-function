function carrepair(num:number) {
    let machanicObj: Promise<string> = new Promise((resolve,reject)=>{
        if(num>4){
    resolve("car theak ho jay gi..")
        }
        else {
    reject("nhi ho gi..")        
        }
    });
    return machanicObj
}
let respons = carrepair(6)
console.log("Response..",respons);

// ============================================================================


function bike() {
    let honda : Promise<string>= new Promise((resolve, reject) => {
        console.log("resolve");
        resolve("bike thk ho gay ha")

        console.log("rejected");
        reject("bike fail ha")
        
    })
    return honda
}
let response = bike()

response.then((text:string)=>{
    console.log("resolve..",text);
    return bike
})
response.catch((err)=>{
     console.log("rejected...",err);
     
})