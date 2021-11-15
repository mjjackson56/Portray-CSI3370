var savedWork;
function openSavedWork(id) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            //console.log(this.responseText);
            res = JSON.parse(this.responseText);
            //console.log(res[0]);
            if (res[0] == 1) {
                window.localStorage.setItem("has_back", res[0]);
                window.localStorage.setItem("savedWork", res[1]);
                window.localStorage.setItem("savedWorkShapeStack", res[3]);
                window.localStorage.setItem("savedWorkMarkerStack", res[4]);
                window.localStorage.setItem("savedWorkTextStack", res[5]);
                window.location.assign("/index.php");
            }
            else {
                window.localStorage.setItem("has_back", res[0]);
                window.localStorage.setItem("savedWorkShapeStack", res[2]);
                window.localStorage.setItem("savedWorkMarkerStack", res[3]);
                window.localStorage.setItem("savedWorkTextStack", res[4]);
                window.location.assign("/index.php");
            }
        }
    };
    xhttp.open("POST", "../php/databaseinterface/openSavedWork.php", true);
    xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhttp.send("&work_id=" + id);
}