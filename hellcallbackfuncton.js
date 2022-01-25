let studentdetail = () =>{
        setTimeout( () =>
        {
            console.log("Getting roll no");
            let rollno=[1,2,3,4,5];
            console.log(rollno);
            
            setTimeout( (rollno) =>{
                let studentnameage = {
                    name:"dj",
                    age:20
                }
                console.log(`My Roll No. Is ${rollno} AND My name is ${studentnameage.name} and I am ${studentnameage.age} year old`);
               
            setTimeout( (name) =>{
                    studentnameage.gender="male";
                    console.log(`My Roll No. Is ${rollno} AND My name is ${studentnameage.name} and I am ${studentnameage.age} year old And I am ${studentnameage.gender}`);
            },2000,studentnameage.name);  
                
            },2000,rollno[2]);

        },2000);
}
studentdetail();