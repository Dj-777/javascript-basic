let myarray=[1,2,3,4,5];
let myset= new Set(myarray);

myset.add(6);
myset.add("Yout Name is::");
myset.add("dj"+"jd");
myset.add({objectname:"name:divyaraj"});

myset.delete(4);
myset.delete(5);
myset.delete(6);
//myset.clear();

/* console.log(myset);
console.log(myarray[2]); */

function double(x){
    return x*2;
}
function triple(x){
    return x*3;
}
let outputdouble=myarray.map(double);
let outputtriple=myarray.map(triple);
let mymap = new Map([[1,"dj"+" " +"1"],[2,"jd","2"]]);

mymap.set({},'djj',"3");
 mymap.delete(1);
//mymap.clear();
console.log(outputdouble);
console.log(outputtriple);

console.log(mymap.has(2));
console.log(mymap.size);