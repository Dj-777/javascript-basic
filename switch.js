function cal()
{
    var a=document.getElementById("firstnumber").value;
    var b=document.getElementById("secondnumber").value;
    var Choice = document.getElementById("Choice").value;
    switch(Choice){
        case "1" :
                    var sum = +a + +b;
                    document.write("Addtion of 2 number is::"+sum);
                    break;
       case "2" : 
                    var sum = a-b;
                    document.write("subtraction of 2 number is::"+sum);
                    break;
        case "3" : 
                    var sum = a*b;
                    document.write("multiplication of 2 number is::"+sum);
                    break;
        default : document.write("Not a valid choice");

    }
}   