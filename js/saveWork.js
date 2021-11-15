function saveWork(shapes, lines, text) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
            //var result = this.responseText;
            window.location.assign("/php/savedWork.php");
        }
    };
    var work = window.localStorage.getItem("workToSave");
    var formData = new FormData();
    formData.set("image", work);
    formData.set("shapesStack", shapes);
    formData.set("markStack", lines);
    formData.set("textStack", text);
    formData.set("filename", prompt("Please name the file"));
    xhttp.open("POST", "../php/databaseinterface/saveWork.php", true);
    //xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhttp.send(formData);
}