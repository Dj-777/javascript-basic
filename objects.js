let user={
    name:"object trial 1",
    age:2,
};
console.log(user.name);
console.log(user.age);
let obj = {
    for: 1,
    let: 2,
    return: 3
  };
  let sum=obj.for + obj.let + obj.return ;
  console.log("Addtion is::" + sum);
  

  let forloopuser = {
    name: "John",
    age: 30,
    isAdmin: true
  };
  
  for (let key in forloopuser) {
    // keys
    console.log( key );  // name, age, isAdmin
    // values for the keys
    console.log( forloopuser[key] ); // John, 30, true
  } 



let objectassignuser = { name: "John" };
Object.assign(objectassignuser, { name: "Pete" });
console.log(objectassignuser.name); 



/*constant can be modified*/

let constantcanbemodified="New MEthosconstant can be modified";
console.log(constantcanbemodified);

const constantmodify = {
    name: "John"
  };
  console.log("Old value is=>"+constantmodify.name);
  constantmodify.name = "Pete"; // (*)
  
  console.log("New value is->"+constantmodify.name);