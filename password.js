function validate(){
    var username = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    if(username =="admin@admin.com" && password=="admin"){
        alert("Login Succesfully")
        window.location.href = "./officialPage.html";
        return false;

    }else{
        alert("login Failed")
    }
}
