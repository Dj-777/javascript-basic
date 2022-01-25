function stringarray(){  
    var input = document.getElementsByName('stringarray[]');
    var text="";
    for(var i=0;i<input.length;i++)
    {
         text +=input[i].value;
    }
    document.getElementById("Result").innerHTML=text;   
    
}