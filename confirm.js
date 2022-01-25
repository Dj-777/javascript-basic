function myconfirm(){
    var fname=document.getElementById("firstname").value;
    var sname=document.getElementById("secname").value;
    if(fname!=="" || sname!==""){
        var name=confirm("Do You Want To See Your Submitted Data??")
        if(name==true){
            document.write("Your First Name is::"+fname);
            document.write("<br>");
            document.write("Your Second Name Is::"+sname);
            document.write("<br>");
            document.write("This Page Will Be Automaically Refresh After Few Seconds")
            window.setTimeout(function(){
                window.location.href = "file:///C:/Users/dcham/OneDrive/Desktop/javascript/confirm.html";
            }, 7000);
        }
        else{
            document.write("User Dosen't Want To Print name");
        }
    }
}