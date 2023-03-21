// games.reorderGame = (post_data, result) => {
//   connection.query(
//     `UPDATE games_order SET game_ids_order = ? WHERE id=1`,
//     [post_data.order_list],
//     (err, update_games_result) => {
//       if (!err) result(err, { status: true, result: update_games_result });
//       else result(err, { status: false, result: err });
//     }
//   );
// };

// games.reorderGame = async (post_data, req = undefined) => {
//   let databaseQueryModel = new DatabaseQueryModel(req);
//   let updateGameOrdersQuery = mysql.format(
//     `UPDATE games_order SET game_ids_order = ? WHERE id=1`,
//     [post_data.order_list]
//   );
//   try {
//     let result = await databaseQueryModel.executeQuery(
//       "Games Model | updateGameOrders",
//       updateGameOrdersQuery
//     );
//     return { status: true, result: result };
//   } catch (err) {
//     return { status: false, message: "Failed to reorder games", err: err };
//   }
// };

// // Promise
// function resolveAfter25Seconds(){
//     return new 
//     // .then(output=>console.log(output))
// }
// resolveAfter25Seconds()

// Async await
async function asyncCall(){
    console.log('calling');
    const result = await new Promise(resolve=>{
        setTimeout(()=>{
            resolve('resolved');
        }, 2000)
    });
    console.log(result);
}
// asyncCall();


// async function foo(){
//     return 1;
// }

// function foo(){
//     return Promise.resolve(1);
// }

// const p = new Promise((res, rej)=>{
//     res(1);
// });

// async function asyncReturn(){
//     return p;
// }

// function basicReturn(){
//     return Promise.resolve(p);
// }

// console.log(asyncReturn())
// console.log(basicReturn())

// async function foo(){
//     await 1;
// }

// function foo(){
//     return Promise.resolve().then(()=>undefined)
// }

// async function foo(){
//     const result1 = await new Promise((resolve)=>
//     setTimeout(()=>resolve("1")),
//     );
//     const result2 = await new Promise((resolve)=>
//     setTimeout(()=>resolve("2")),
//     ).then(res=>console.log())
// }
// foo();

// class AreaCalculator{
//     constructor(shapes){
//         this.shapes = shapes;
//     }
//     sum(){
//         const area = [];
//         for(let i =0; i<this.shapes.length; i++){
//             if(shapes[i]==='Square'){
//                 area.push(shapes[i].length ===2)
//             }else if (shapes[i] === 'Circle'){
//                 area.push(Math.PI()*Math.pow(Math.radius(shapes[i])))
//             }
//         }
//     }
// }

function sigma(num){
let sum =1;
for(let i=1; i<=num; i++){
    sum*=i
}
console.log(sum)
}
sigma(5)