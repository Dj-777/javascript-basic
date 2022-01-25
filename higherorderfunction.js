let interviewquetion = (name)=>{

    if(name=="dj")
    {
        return function(topic){
            console.log(`Hello ${name}. what is ${topic}. Please Explain Us.`);
        }
    }

    if(name=="raja")
    {
        return function(topic){
            console.log(`Hello ${name}. what is ${topic}. Please Explain Us.`);
        }
    }
    
    if(name=="divyaraj")
    {
        return function(topic){
            console.log(`Hello ${name}. what is ${topic}. Please Explain Us.`);
        }
    }

    else{
        return function(){
            console.log("Welcome To Interview");
        }
    }
}

//first methods for calling function
/* 
interviewquetion ("dj")("SESSION In PHP"+" && "+"What is cookies");
interviewquetion ("raja")("COOKIES In PHP");
interviewquetion ("divyaraj")("JS Higher oredr function");
 */


//Second method for calling funciton 

let person1 = interviewquetion("dj");
person1("Session And Cookies in PHP");
person1("include and require");