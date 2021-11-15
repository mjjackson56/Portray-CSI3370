function uploadWorkLocal() {
    var xhttp = new XMLHttpRequest();
    document.getElementById('choose_file').disabled = false;
    document.getElementById('upload_file').disabled = true;
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
            var result = this.responseText;
            window.location.assign("/php/savedWork.php");
        }
    };
    var work = document.getElementById('UploadWork').files[0];
    console.log(work);
    var formData = new FormData();
    formData.append("file", work);
    xhttp.open("POST", "../php/databaseinterface/uploadWork.php", true);
    //xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhttp.send(formData);
}