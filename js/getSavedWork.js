function getSavedWork() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            //console.log(this.responseText);
            var res = JSON.parse(this.responseText);
            for (var i = 0; i < res[0].length; i++) {
                var div = document.createElement('div');
                div.className = "thumbnail";
                div.id = "preview" + i;
                document.getElementById('body').appendChild(div);
                var img = document.createElement('img');
                //img.alt = "test";
                img.src = res[0][i];
                document.getElementById(div.id).appendChild(img);
                var bttnDiv = document.createElement('div');
                bttnDiv.className = "middle";
                bttnDiv.id = "bttnDiv" + i;
                document.getElementById(div.id).appendChild(bttnDiv);
                var openBttn = document.createElement('button');
                openBttn.innerHTML = "Open";
                openBttn.className = "buttons";
                openBttn.type = "button";
                openBttn.setAttribute('onclick', 'openSavedWork(' + res[1][i] + ')');
                document.getElementById(bttnDiv.id).appendChild(openBttn);
                var deleteBttn = document.createElement('button');
                deleteBttn.innerHTML = "Delete";
                deleteBttn.className = "buttons";
                deleteBttn.type = "button";
                deleteBttn.setAttribute('onclick', 'deleteSavedWork(' + res[1][i] + ')');
                document.getElementById(bttnDiv.id).appendChild(deleteBttn);
            }
        }
    };

    xhttp.open("GET", "../php/databaseinterface/getSavedWork.php", true);
    xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhttp.send();
}