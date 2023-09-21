// function cricketmatch(cb:(text:string)=>void) {
//     console.log("two teams are ready to play match");
    
//     setTimeout(() => {
//         console.log("team A and team B captains are ready to choose the toss");
//         cb("team a win toss and choose bat first")
//     }, 2000);
// }
// function callback(text:string) {
//     console.log("call back :" +text);
//     playmatch(callback1)
// }

// function playmatch(cc:(text:string)=>void) {
//     console.log("team A score is 120 and target is 121 to team B");
//     setTimeout(() => {
//         console.log("after take rest team B batsman in the ground and playing match");
//         cc("team B score is 122 and win match")
        
//     }, 3000);
// }
//     function callback1(text:string) {
//         console.log("call back: "+ text);
//     }

// cricketmatch(callback)

// =======================================================

// function someTask(num: number){
//     let promiseObj :Promise<string> = new Promise((resolve,reject)=>{

//         if(num >3 ){
//         resolve("Promises are resolved here...");
//         }
//         else{
//             reject("Promises are rejected here...")
//         }
//     });

//     return promiseObj;
// }
// let response = someTask(4);
// console.log("Response...",response);

// function task2(){
//     let promiseObj :Promise<string> = new Promise((resolve,reject)=>{
//         reject("task2 Promises are resolved here...");
//     });

//     return promiseObj;
// }

// let response = someTask(6);

// response.then((text:string)=>{
// console.log("then of values..", text);
// return task2();
// })
// .then((text:string)=>{
//     console.log("then of task2..", text);
// })
// .catch((err)=>{
//     console.log("This is catch..", err);
// })


