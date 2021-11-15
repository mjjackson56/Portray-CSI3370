function deleteSavedWork(id) {
    var xhttp = new XMLHttpRequest();
    console.log('delete');
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            //console.log(this.responseText);
            window.location.reload();
                        
        }
    };
    xhttp.open("POST", "../php/databaseinterface/deleteSavedWork.php", true);
    xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhttp.send("&work_id=" + id);
}