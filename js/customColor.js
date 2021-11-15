let customColorOBJ = function (p) {
    var backgroundColor = 240;

    p.setup = function() {
        p.createCanvas(50, 50);
        p.background(backgroundColor);
    };

    p.draw = function() {
        r = document.getElementById("colorR").value
        g = document.getElementById("colorG").value
        b =document.getElementById("colorB").value
        p.background(r,g,b);
    };
}

    let colorWheel = new p5(customColorOBJ, "customeColorContainer");