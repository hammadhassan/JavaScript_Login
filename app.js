var name = document.getElementById("name").value;
var Name = name;
var mail = document.getElementById("mail").value;
var Mail = mail;
var passw = document.getElementById("pass").value;   
var Pass = passw;
//Signup 
function signup() {
///Name
//     if (Name === "" || Name === "  " || Name === " ") {
//         alert("Please Enter Name");
//     } else {
//         var name1 = Name;
//         name.value= "";
//         }
// //Email
//     if (Mail === "" || Mail === "  " || Mail === " ") {
//         alert("Please Enter Email");
//     } else {
//         var mail1 = Mail;
//         mail.value = "";
//         }
// //Password
//     if (Pass === "" || Pass === "  " || Pass === " ") {
//         alert("Please Enter Password");
//     } else {
//         var pass1 = Pass;
//         passw.value = "";
//     }
    alert("submit");
}
//Login
function login() {
    if (document.getElementById("mail1").value === mail && document.getElementById("pass1").value === passw) {
     alert("Success");
    }
    else {
    alert("Please Enter Correct info")
    }
}