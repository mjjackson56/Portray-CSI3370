function createAccount() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
            //var result = this.responseText;
            window.location.assign("/index.php");
        }
    };
    //var work = document.getElementById('UploadWork').files[0];
    var formData = new FormData();
    formData.set("username", document.getElementById("username").value);
    formData.set("password", document.getElementById("password").value);
    if (document.getElementById("username").value == '' || document.getElementById("username").value == ' ' || document.getElementById("password").value == '' || document.getElementById("password").value == ' ') {
        return;
    }
    xhttp.open("POST", "../php/databaseinterface/createUserAccount.php", true);
    //xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhttp.send(formData);
}