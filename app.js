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
        if (obj.email == data[i].mail && obj.pass == data[i].pass) {
            alert("Login")
        } else {
            alert("Please Check email or Password")
        }
        //console.log(data[i].email)
    }
}