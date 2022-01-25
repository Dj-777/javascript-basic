let user={
    name:"object trial 1",
    age:2,
};
console.log(user.name);
console.log(user.age);
let obj = {
    a: 1,
    b: 2,
    c: 3
  };
  let sum=obj.a + obj.b + obj.c ;
  console.log("Addtion is::" + sum);
  

  let forloopuser = {
    name: "dj",
    age: 30,
    isAdmin: true
  };
  
  for (let key in forloopuser) {
    // keys
    console.log( key );  // name, age, isAdmin
    // values for the keys
    console.log( forloopuser[key] ); // dj, 30, true
  } 



let objectassignuser = { name: "dj" };
Object.assign(objectassignuser, { name: "divyaraj" });
console.log(objectassignuser.name); 



/*constant can be modified*/

let constantcanbemodified="New MEthosconstant can be modified";
console.log(constantcanbemodified);

const constantmodify = {
    name: "dj"
  };
  console.log("Old value is=>"+constantmodify.name);
  constantmodify.name = "divyaraj"; // (*)
  
  console.log("New value is->"+constantmodify.name);