function whileloop() {
    var i = document.getElementById("value").value;
    var j=1;
    if(i<=100){
    while (j<=i) {
        document.write(j);
        j++;
        document.write("<br>");
    }
    }
    else{
        document.write("Please Enter value less than 100")
    }
}