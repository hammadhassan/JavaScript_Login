var userinfo = [];
//Signup 
function signup() {
    var obj = {
        name : document.getElementById("name").value,
        mail: document.getElementById("mail").value,
        pass: document.getElementById("pass").value
    }
    if (localStorage.user == undefined) {
        userinfo.push(obj)
        localStorage.setItem("user", JSON.stringify(userinfo))
        location.href = "login.html"
    } else {
        var data = JSON.parse(localStorage.user);
        userinfo = data
        userinfo.push(obj)
        localStorage.setItem("user", JSON.stringify(userinfo))
        location.href = "login.html"
    }
}
//login
function login() {
    var obj = {
        email: document.getElementById("mail1").value,
        pass: document.getElementById("pass1").value
    }
    var data = JSON.parse(localStorage.getItem("user"))
    for (i = 0; i < data.length; i++) {
        if (obj.email == data[i].email && obj.pass == data[i].pass) {
            alert("Login")
        } else {
            console.log("Please Check email or Password")
        }
        //console.log(data[i].email)
    }
}
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
//     alert("submit");
// }
// //Login
// function login() {
//     if (document.getElementById("mail1").value === mail && document.getElementById("pass1").value === passw) {
//      alert("Success");
//     }
//     else {
//     alert("Please Enter Correct info")
//     }
// }