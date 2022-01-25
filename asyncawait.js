let studentdetail = new Promise((resolve,reject)=>{
    console.log("API getting rollno");
    setTimeout(() => {
        let rollno=[1,2,3,4,5];
        resolve(rollno);
        reject("Error While Rollno");
    }, 2000);
});

let getstudentdetailbyrollno =(rollno)=>{
    return new Promise((resolve,reject)=>{
        setTimeout((rollno) => {
            let studentdetailbyrollno={
                name:'Dj',
                Age:20        
            };
            resolve(`My roll no is ${rollno} and My name is ${studentdetailbyrollno.name} and I am  ${studentdetailbyrollno.Age} Years old.`);
            reject("Error While Getting name and age");
        }, 2000,rollno);
    });
}

async function getdata(){
    let rollno = await studentdetail;
    console.log(rollno);

    let nameandage = await getstudentdetailbyrollno(rollno[2]);
    console.log(nameandage);

    return rollno;
    
}
getdata().catch((error)=>{
        console.log(error);
});