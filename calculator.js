function opration(e){
    console.log(e);
    e.preventDefault();
    var a= document.getElementById("input1").value;
    var b= document.getElementById("input2").value;
    var choice=document.getElementById("choice").value;
    var text;
    if(choice==1)
    {
    var sum = +a + +b ;
    text=("Your Addtion is::"+sum);
    outputprint.innerHTML=text;
    }
    
    else if(choice==2)
    {
    var sum = a-b ;
    text=("Your Subtraction is::"+sum);
    outputprint.innerHTML=text;    
    }
    
    else if(choice==3)
    {
    var sum = a*b ;
    text=("Your Multiplication is::"+sum);
    outputprint.innerHTML=text;
    }

    else if(!choice==1|| 2 || 3)
    {
        text=("Please Choose Between 1,2 & 3");
        outputprint.innerHTML=text;
    }
    return false;
}
