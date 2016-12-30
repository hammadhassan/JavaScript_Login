function name1() {
}
//Name
var name = document.getElementById("name").value;
if (name === "" || name === "  " || name === " ") {
    alert("Please Enter Name");
} else {
    name;
    name.value= "";
    };
//Email
var mail = document.getElementById("mail").value;
if (mail === "" || mail === "  " || mail === " ") {
    alert("Please Enter Email");
} else {
    mail;
    var newmail = mail;
    //mail.value= "";
    };
 //Password
 var passw = document.getElementById("pass").value;
if (passw === "" || passw === "  " || passw === " ") {
    alert("Please Enter Password");
} else {
    passw;
    var newpass = pass;
    //passw.value= "";
    };   
//Signup 
function signup() {
    var name1 = name;
    var mail1 = mail;
    var pass1 = passw;
    alert("submit");
    mail.value = " ";
    pass.value = "";
    name.value = " ";
}
//Login
function login() {
    if (mail === newmail || passw === newpass) {
     alert("Success");
    }
    else {
    alert("Please Enter Correct info")
    }
}