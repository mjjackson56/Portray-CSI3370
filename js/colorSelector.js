let colorSelector = function () {
    var colors = document.getElementById("colorsTable");
    var colorsList = [
        ["#000000", "#A9A9A9", "#A52A2A", "#8B0000",
        "#B22222", "#FF0000", "#FF4500", "#ff6600",
        "#FF8C00", "#B8860B"], ["#DAA520", "#FFFF00",
        "#FFD700", "#ADFF2F", "#7CFC00", "#008000",
        "#228B22", "#90EE90", "#00FF00", "#3CB371"],
        ["#00FA9A", "#48D1CC", "#40E0D0", "#0000FF",
        "#87CEEB", "#00008B", "#0000CD", "#4682B4",
        "#4169E1", "#000080"], ["#8A2BE2", "#8B008B",
        "#9932CC", "#9400D3", "#4B0082", "#800080",
        "#FF69B4", "#FF00FF", "#C71585", "#EE82EE"]]        

    colorsList.forEach(function (number, index) {
        var row = colors.insertRow(index);
        number.forEach(function (num) {
            var tmpButton = document.createElement("BUTTON");
            tmpButton.style.background=num;
            tmpButton.setAttribute("onclick", "colorSelectButtonPressed(this)");
            tmpButton.style.height = "25px"
            tmpButton.style.width = "25px"
            var cell = row.appendChild(tmpButton);
            //cell.innerHTML = num;
        })
    });
}

let colorSelectButtonPressed = function(ele) {    
    hexColor = ele.style.background;
    hexColor = hexColor.substring(hexColor.indexOf('(')+1, hexColor.indexOf(')'));
    rgbColors=hexColor.split(',', 3);
    rgbColors[0]=parseInt(rgbColors[0]);
    rgbColors[1]=parseInt(rgbColors[1]);
    rgbColors[2]=parseInt(rgbColors[2]);
    document.getElementById("colorR").value = rgbColors[0];
    document.getElementById("colorG").value = rgbColors[1];
    document.getElementById("colorB").value = rgbColors[2];
    console.log(document.getElementById("colorR").value, document.getElementById("colorG").value, document.getElementById("colorB").value);
}

/*
var colorsList = [
        ["#000000", "#A9A9A9", "#A52A2A", "#8B0000"],
        ["#B22222", "#FF0000", "#FF4500", "#ff6600"],
        ["#FF8C00", "#B8860B", "#DAA520", "#FFFF00"],
        ["#FFD700", "#ADFF2F", "#7CFC00", "#008000"],
        ["#228B22", "#90EE90", "#00FF00", "#3CB371"],
        ["#00FA9A", "#48D1CC", "#40E0D0", "#0000FF"],
        ["#87CEEB", "#00008B", "#0000CD", "#4682B4"],
        ["#4169E1", "#000080", "#8A2BE2", "#8B008B"],
        ["#9932CC", "#9400D3", "#4B0082", "#800080"],
        ["#FF69B4", "#FF00FF", "#C71585", "#EE82EE"]]
*/