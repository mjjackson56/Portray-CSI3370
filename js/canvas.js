let mainCanvasOBJ = function (p) {

    class Rectangle {

        constructor() {
            this.shapeType = "rectangle";
            this.completed = false;
            this.x;
            this.y;
            this.width;
            this.height;
            this.noStroke = false;
            this.strokeColor = 0;
            this.strokeWidth = 1;
            this.fillColor = 255;
            this.noFillColor = false;
            this.minX;
            this.minY;
            this.maxX;
            this.maxY;
        }

        isInBounds(x, y) {
            if (x > this.minX && x < this.maxX && y > this.minY && y < this.maxY) {
                console.log('T');
                return true;
            }
            else
                return false;
        }

        drawShape() {
            if (this.noFillColor == true) {
                shapesCanvas.noFill();
            }
            else {
                shapesCanvas.fill(this.fillColor);
            }
            if (this.noStroke == true) {
                shapesCanvas.noStroke();
            }
            else {
                shapesCanvas.stroke(this.strokeColor);
            }
            shapesCanvas.strokeWeight(this.strokeWidth);
            shapesCanvas.rect(this.x, this.y, this.width, this.height);
        }
    }

    class Ellipse {

        constructor() {
            this.shapeType = "ellipse";
            this.completed = false;
            this.x;
            this.y;
            this.width;
            this.height;
            this.size;
            this.noStroke = false;
            this.strokeColor = 0;
            this.strokeWidth = 1;
            this.fillColor = 255;
            this.noFillColor = false;
            this.minX;
            this.minY;
            this.maxX;
            this.maxY;
        }

        isInBounds(x, y) {
            if (x > this.minX && x < this.maxX && y > this.minY && y < this.maxY) {
                return true;
            }
            else
                return false;
        }

        drawShape() {
            if (this.noFillColor == true) {
                shapesCanvas.noFill();
            }
            else {
                shapesCanvas.fill(this.fillColor);
            }
            if (this.noStroke == true) {
                shapesCanvas.noStroke();
            }
            else {
                shapesCanvas.stroke(this.strokeColor);
            }
            shapesCanvas.strokeWeight(this.strokeWidth);
            shapesCanvas.ellipse(this.x, this.y, this.width, this.height);
        }
    }

    class Line {
        constructor() {
            this.shapeType = "line";
            this.completed = false;
            this.x1;
            this.y1;
            this.x2;
            this.y2;
            this.noStroke = false;
            this.strokeColor = 0;
            this.strokeWidth = 10;
        }

        isInBounds(x, y) {
            this.minX = Math.min(this.x1, this.x2);
            this.minY = Math.min(this.y1, this.y2);
            this.maxX = Math.max(this.x1, this.x2);
            this.maxY = Math.max(this.y1, this.y2);
            if (x > this.minX && x < this.maxX && y > this.minY && y < this.maxY) {
                console.log('T');
                return true;
            }
            else {
                return false;
            }
        }

        drawShape() {
            if (this.noStroke == true) {
                shapesCanvas.noStroke();
            }
            else {
                shapesCanvas.stroke(this.strokeColor[0], this.strokeColor[1], this.strokeColor[2], this.strokeColor[3]);
            }
            shapesCanvas.strokeWeight(this.strokeWidth);
            shapesCanvas.line(this.x1, this.y1, this.x2, this.y2);
        }
    }

    class Marker {
        constructor() {
            this.markType = "marker";
            this.x1;
            this.y1;
            this.x2;
            this.y2;
            this.noStroke = false;
            this.strokeColor = 0;
            this.strokeWidth = 10;
            this.minX = Math.min(this.x1, this.x2);
            this.minY = Math.min(this.y1, this.y2);
            this.maxX = Math.max(this.x1, this.x2);
            this.maxY = Math.max(this.y1, this.y2);
            this.hitBox = 500;
        }

        isInBounds(x, y) {
            if (x > this.minX - this.hitBox && x < this.maxX + this.hitBox && y > this.minY - this.hitBox && y < this.maxY + this.hitBox) {
                console.log('T');
                return true;
            }
            else {
                return false;
            }
        }

        drawMark() {
            if (this.noStroke == true) {
                p.noStroke();
            }
            else {
                p.stroke(this.strokeColor[0], this.strokeColor[1], this.strokeColor[2], this.strokeColor[3]);
            }
            p.strokeWeight(this.strokeWidth);
            p.line(this.x1, this.y1, this.x2, this.y2);
        }
    }

    class TextBox {
        constructor() {
            this.shapeType = "textbox";
            this.text = 'tempText';
            this.completed = false;
            this.x = -1000;
            this.y = -1000;
            this.size;
            this.noStroke = false;
            this.strokeColor = 0;
            this.strokeWidth = 1;
            this.fillColor = 0;
            this.noFillColor = false;
            this.bounds;
        }

        isInBounds(x, y) {
            this.bounds = font.textBounds(this.text, this.x, this.y, this.size);
            this.minX = Math.min(this.bounds.x, this.bounds.w);
            this.minY = Math.min(this.bounds.y, this.bounds.h);
            this.maxX = Math.max(this.bounds.x, this.bounds.w);
            this.maxY = Math.max(this.bounds.y, this.bounds.h);
            console.log(this.minX,
                this.minY,
                this.maxX,
                this.maxY);
            if (x > this.minX && x < this.maxX && y > this.minY && y < this.maxY) {
                console.log('T');
                return true;
            }
            else {
                return false;
            }
        }

        drawText() {
            if (this.noFillColor == true) {
                p.noFill();
            }
            else {
                p.fill(Number(this.fillColor));
            }
            if (this.noStroke == true) {
                p.noStroke();
            }
            else {
                p.stroke(Number(this.strokeColor));
            }
            p.strokeWeight(this.strokeWidth);
            p.textSize(Number(this.size));
            p.text(this.text, this.x, this.y);
        }
    }

    class DrawStack {
        constructor() {
            this.stack = [];
        }

        isEmpty() {
            if (this.stack.length === 0)
                return true;
        }

        push(x) {
            this.stack.push(x);
        }

        pop() {
            if (this.stack.length == 0)
                return "Empty";
            return this.stack.pop();
        }

        getTopShape() {
            return this.stack[this.stack.length - 1];
        }

        getStackAsString() {
            var str = "";
            for (var i = 0; i < this.stack.length; i++)
                str += this.stack[i] + " ";
            return str;
        }

        clearStack() {
            this.stack = [];
        }

        drawAllMarks() {
            for (let i = 0; i < this.stack.length; i++) {
                this.stack[i].drawMark();
            }
        }

        removeMarkFromStack(x) {
            this.stack.splice(x, 1);
        }

        eraseMark(x, y) {
            for (let i = 1; i < this.stack.length; i++) {
                if (this.stack[i].isInBounds(x, y) == true) {
                    this.removeMarkFromStack(i);
                }
                p.background(backgroundColor);
                drawStack.drawAllMarks();
            }
        }

    }

    class ShapeStack {
        constructor() {
            this.stack = [];
        }

        isEmpty() {
            if (this.stack.length === 0)
                return true;
        }

        push(x) {
            this.stack.push(x);
        }

        pop() {
            if (this.stack.length == 0)
                return "Empty";
            return this.stack.pop();
        }

        getTopShape() {
            return this.stack[this.stack.length - 1];
        }

        getStackAsString() {
            var str = "";
            for (var i = 0; i < this.stack.length; i++)
                str += this.stack[i] + " ";
            return str;
        }

        clearStack() {
            this.stack = [];
        }

        drawAllShapes() {
            for (let i = 0; i < this.stack.length; i++) {
                this.stack[i].drawShape();
            }
        }

        removeShapeFromStack(x) {
            this.stack.splice(x, 1);
        }

        eraseShape(x, y) {
            for (let i = 1; i < this.stack.length; i++) {
                if (this.stack[i].isInBounds(x, y) == true) {
                    this.removeShapeFromStack(i);
                }
                shapeStack.drawAllShapes();
                p.image(shapesCanvas, 0, 0);
            }
        }
    }

    class TextStack {
        constructor() {
            this.stack = [];
        }

        isEmpty() {
            if (this.stack.length === 0)
                return true;
        }

        push(x) {
            this.stack.push(x);
        }

        pop() {
            if (this.stack.length == 0)
                return "Empty";
            return this.stack.pop();
        }

        getTopText() {
            return this.stack[this.stack.length - 1];
        }

        getStackAsString() {
            var str = "";
            for (var i = 0; i < this.stack.length; i++)
                str += this.stack[i] + " ";
            return str;
        }

        clearStack() {
            this.stack = [];
        }

        drawAllText() {
            for (let i = 0; i < this.stack.length; i++) {
                this.stack[i].drawText();
            }
        }

        removeTextFromStack(x) {
            this.stack.splice(x, 1);
        }

        eraseText(x, y) {
            for (let i = 0; i < this.stack.length; i++) {
                if (this.stack[i].isInBounds(x, y) == true) {
                    this.removeTextFromStack(i);
                }
                textStack.drawAllText();
                p.background(0);
            }
        }
    }

    let img;
    var mode = "marker";
    var backgroundColor = 240;
    let x1, y1;
    var shapeToDraw;
    let font = p.loadFont('/assets/fonts/tnr.otf');
    let drawStack = new DrawStack();
    let shapeStack = new ShapeStack();
    let textStack = new TextStack();
    let tempText;
    let tmprect = new Rectangle();
    let tmptri = new Ellipse();
    let tmpline = new Marker();
    tmpline.noStroke = true;
    drawStack.push(tmpline);
    shapeStack.push(tmprect);
    shapeStack.push(tmptri);
    let workToLoad = false;

    p.setup = function () {
        p.createCanvas(window.innerHeight - 50, window.innerHeight - 50);
        p.background(backgroundColor);
        shapesCanvas = p.createGraphics(window.innerHeight - 50, window.innerHeight - 50);
        shapesCanvas.clear();
        tempText = new TextBox();
        textStack.push(tempText);
    };

    p.draw = function () {

        if (mode == "textbox") {
            let textbox = new TextBox();
            textbox.text = inputText;
            textbox.x = p.mouseX;
            textbox.y = p.mouseY;
            textbox.size = document.getElementById("fontSize").value;
            if (textStack.getTopText().completed == false) {
                textStack.pop();
            }

            textStack.push(textbox);
        }

        var ellW = document.getElementById("myRange").value;
        if (p.mouseIsPressed) {
            if (mode == "marker") {
                let marker = new Marker()
                marker.x1 = p.mouseX;
                marker.y1 = p.mouseY;
                marker.x2 = p.pmouseX;
                marker.y2 = p.pmouseY;
                marker.strokeWidth = ellW;

                r = document.getElementById("colorR").value
                g = document.getElementById("colorG").value
                b = document.getElementById("colorB").value
                marker.strokeColor = [r, g, b];

                drawStack.push(marker);
            }
            else if (mode == "highlighter") {
                let marker = new Marker()
                marker.markType = "highlighter";
                marker.x1 = p.mouseX;
                marker.y1 = p.mouseY;
                marker.x2 = p.pmouseX;
                marker.y2 = p.pmouseY;
                marker.strokeWidth = ellW;

                r = document.getElementById("colorR").value;
                g = document.getElementById("colorG").value;
                b = document.getElementById("colorB").value;
                marker.strokeColor = [r, g, b, 10];

                drawStack.push(marker);
            }
            else if (mode == "eraser") {
                shapeStack.eraseShape(p.mouseX, p.mouseY);
                textStack.eraseText(p.mouseX, p.mouseY);
                //drawStack.eraseMark(p.mouseX, p.mouseY);                
                let marker = new Marker()
                marker.strokeColor = [240, 240, 240];
                marker.x1 = p.mouseX;
                marker.y1 = p.mouseY;
                marker.x2 = p.pmouseX;
                marker.y2 = p.pmouseY;
                marker.strokeWidth = ellW;
                drawStack.push(marker);
            }
        }
        p.background(backgroundColor);

        if (workToLoad)
            p.image(img, 0, 0);

        // shapesCanvas.clear();
        // shapeStack.drawAllShapes();
        // p.image(shapesCanvas, 0, 0);


        textStack.drawAllText();
        drawStack.drawAllMarks();
        shapesCanvas.clear();
        shapeStack.drawAllShapes();
        p.image(shapesCanvas, 0, 0);

    };

    p.clear_button = function () {
        drawStack.clearStack();
        shapeStack.clearStack();
        textStack.clearStack();
        drawStack.push(tmpline);
        shapeStack.push(tmprect);
        shapeStack.push(tmptri);
        textStack.push(tempText);
    };

    p.small_canvas = function () {
        p.resizeCanvas(800, 800);
        p.clear_button();
    };

    p.medium_canvas = function () {
        p.resizeCanvas(1200, 1200);
        p.clear_button();
    };

    p.large_canvas = function () {
        p.resizeCanvas(1600, 1200);
        p.clear_button();
    };

    p.changeCanvasSize = function () {
        switch (document.getElementById("canvasSizeSelector").value) {
            case "small":
                p.small_canvas();
                break;
            case "medium":
                p.medium_canvas();
                break;
            case "large":
                p.large_canvas();
                break;
            default:
                p.small_canvas();
        }
    };

    p.selectMarker = function () {
        mode = "marker";
        document.getElementById("colorR").value = 0;
        document.getElementById("colorG").value = 0;
        document.getElementById("colorB").value = 0;
        document.getElementById("myRange").value = 20;
        document.getElementById("markerTool").style.background = '#5e92f3';
        document.getElementById("highlighterTool").style.background = '#ffffff';
        document.getElementById("eraserTool").style.background = '#ffffff';
        document.getElementById("rectangleTool").style.background = '#ffffff';
        document.getElementById("ellipseTool").style.background = '#ffffff';
        document.getElementById("lineTool").style.background = '#ffffff';
    };

    p.selectEraser = function () {
        mode = "eraser";
        document.getElementById("markerTool").style.background = '#ffffff';
        document.getElementById("highlighterTool").style.background = '#ffffff';
        document.getElementById("eraserTool").style.background = '#5e92f3';
        document.getElementById("rectangleTool").style.background = '#ffffff';
        document.getElementById("ellipseTool").style.background = '#ffffff';
        document.getElementById("lineTool").style.background = '#ffffff';
    };
    p.selectHighlighter = function () {
        mode = "highlighter";
        document.getElementById("colorR").value = 255;
        document.getElementById("colorG").value = 255;
        document.getElementById("colorB").value = 0;
        document.getElementById("myRange").value = 75;
        document.getElementById("markerTool").style.background = '#ffffff';
        document.getElementById("highlighterTool").style.background = '#5e92f3';
        document.getElementById("eraserTool").style.background = '#ffffff';
        document.getElementById("rectangleTool").style.background = '#ffffff';
        document.getElementById("ellipseTool").style.background = '#ffffff';
        document.getElementById("lineTool").style.background = '#ffffff';
    };
    p.selectShape = function (x) {
        mode = "shape";
        shapeToDraw = x;
        if (x == 'rectangle') {
            document.getElementById("markerTool").style.background = '#ffffff';
            document.getElementById("highlighterTool").style.background = '#ffffff';
            document.getElementById("eraserTool").style.background = '#ffffff';
            document.getElementById("rectangleTool").style.background = '#5e92f3';
            document.getElementById("ellipseTool").style.background = '#ffffff';
            document.getElementById("lineTool").style.background = '#ffffff';
        }
        else if (x == 'ellipse') {
            document.getElementById("markerTool").style.background = '#ffffff';
            document.getElementById("highlighterTool").style.background = '#ffffff';
            document.getElementById("eraserTool").style.background = '#ffffff';
            document.getElementById("rectangleTool").style.background = '#ffffff';
            document.getElementById("ellipseTool").style.background = '#5e92f3';
            document.getElementById("lineTool").style.background = '#ffffff';
        }
        else if (x == 'line') {
            document.getElementById("markerTool").style.background = '#ffffff';
            document.getElementById("highlighterTool").style.background = '#ffffff';
            document.getElementById("eraserTool").style.background = '#ffffff';
            document.getElementById("rectangleTool").style.background = '#ffffff';
            document.getElementById("ellipseTool").style.background = '#ffffff';
            document.getElementById("lineTool").style.background = '#5e92f3';
        }
    };
    p.selectTextBox = function () {
        document.getElementById("textboxInput").type = "text";
        document.getElementById("fontSize").type = "range";
        document.getElementById("textBoxAdd").style.visibility = "visible";
        document.getElementById("fontSizeLabel").innerText = "Font Size: " + document.getElementById("fontSize").value;
    };
    p.submitTextBox = function () {
        mode = "textbox";
        shapeToDraw = "textbox";
        inputText = document.getElementById("textboxInput").value;
        document.getElementById("textboxInput").type = "hidden";
        document.getElementById("fontSize").type = "hidden";
        document.getElementById("textBoxAdd").style.visibility = "hidden";
        document.getElementById("fontSizeLabel").innerText = '';
    }
    p.updateFontSizeLabel = function () {
        document.getElementById("fontSizeLabel").innerText = "Font Size: " + document.getElementById("fontSize").value;
    };
    p.saveSketch = function () {
        window.localStorage.setItem("workToSave", p.get().canvas.toDataURL());
        saveWork(JSON.stringify(shapeStack), JSON.stringify(drawStack), JSON.stringify(textStack));
    };
    p.saveWorkLocal = function () {
        p.saveCanvas('drawing.jpg');
    };

    p.mouseReleased = function () {
        if (mode == "shape") {
            topShape = shapeStack.pop();
            topShape.completed = true;
            shapeStack.push(topShape);
        }
        if (mode == "textbox") {
            toptext = textStack.pop();
            toptext.completed = true;
            textStack.push(toptext);
            mode = "marker";
        }

    };

    p.mousePressed = function () {
        x1 = p.mouseX;
        y1 = p.mouseY;
    };

    p.mouseDragged = function () {
        if (mode == "shape") {
            if (shapeToDraw == "rectangle") {
                let rectangle = new Rectangle();
                rectangle.strokeWidth = document.getElementById("myRange").value;
                rectangle.minX = Math.min(p.mouseX, x1);
                rectangle.minY = Math.min(p.mouseY, y1);
                rectangle.maxX = Math.max(p.mouseX, x1);
                rectangle.maxY = Math.max(p.mouseY, y1);

                rectangle.x = rectangle.minX;
                rectangle.y = rectangle.minY;
                rectangle.width = rectangle.maxX - rectangle.minX;
                rectangle.height = rectangle.maxY - rectangle.minY;

                rectangle.noFillColor = true;
                rectangle.strokeColor = 0;

                if (shapeStack.getTopShape().shapeType == "rectangle" && shapeStack.getTopShape().completed == false) {
                    shapeStack.pop();
                }

                shapeStack.push(rectangle);
            }
            else if (shapeToDraw == "ellipse") {
                let ellipse = new Ellipse();
                ellipse.strokeWidth = document.getElementById("myRange").value;
                middleX = (p.mouseX + x1) / 2;
                middleY = (p.mouseY + y1) / 2;
                ellipse.minX = Math.min(p.mouseX, x1);
                ellipse.minY = Math.min(p.mouseY, y1);
                ellipse.maxX = Math.max(p.mouseX, x1);
                ellipse.maxY = Math.max(p.mouseY, y1);


                ellipse.x = middleX;
                ellipse.y = middleY;
                ellipse.width = ellipse.maxX - ellipse.minX;
                ellipse.height = ellipse.maxY - ellipse.minY;

                ellipse.noFillColor = true;
                ellipse.strokeColor = 0;

                if (shapeStack.getTopShape().shapeType == "ellipse" && shapeStack.getTopShape().completed == false) {
                    shapeStack.pop();
                }

                shapeStack.push(ellipse);
            }
            else if (shapeToDraw == "line") {
                let line = new Line();
                line.strokeWidth = document.getElementById("myRange").value;
                line.minX = Math.min(p.mouseX, x1);
                line.minY = Math.min(p.mouseY, y1);
                line.maxX = Math.max(p.mouseX, x1);
                line.maxY = Math.max(p.mouseY, y1);

                line.x1 = x1;
                line.y1 = y1;
                line.x2 = p.mouseX;
                line.y2 = p.mouseY;

                line.noFillColor = true;
                line.strokeColor = 0;

                if (shapeStack.getTopShape().shapeType == "line" && shapeStack.getTopShape().completed == false) {
                    shapeStack.pop();
                }

                shapeStack.push(line);
            }
        }

    };

    p.openWork = function (work, shapeS, markerS, textS) {
        img = p.loadImage(work, 0, 0);
        p.image(img, 0, 0);
        workToLoad = true;
        shapes = JSON.parse(shapeS);
        //console.log(shapes);
        for (var i = 2; i < shapes['stack'].length; i++) {
            let rect = new Rectangle;
            let ell = new Ellipse;
            let li = new Line;
            if (shapes['stack'][i].shapeType == "rectangle") {
                rect.x = shapes['stack'][i].x;
                rect.y = shapes['stack'][i].y;
                rect.maxX = shapes['stack'][i].maxX;
                rect.maxY = shapes['stack'][i].maxY;
                rect.minX = shapes['stack'][i].minX;
                rect.minY = shapes['stack'][i].minY;
                rect.height = shapes['stack'][i].height;
                rect.width = shapes['stack'][i].width;
                rect.shapeType = shapes['stack'][i].shapeType;
                rect.noStroke = shapes['stack'][i].noStroke;
                rect.noFillColor = shapes['stack'][i].noFillColor;
                rect.strokeColor = shapes['stack'][i].strokeColor;
                rect.strokeWidth = shapes['stack'][i].strokeWidth;
                rect.completed = shapes['stack'][i].completed;
                shapeStack.push(rect);
            }
            else if (shapes['stack'][i].shapeType == "ellipse") {
                ell.x = shapes['stack'][i].x;
                ell.y = shapes['stack'][i].y;
                ell.maxX = shapes['stack'][i].maxX;
                ell.maxY = shapes['stack'][i].maxY;
                ell.minX = shapes['stack'][i].minX;
                ell.minY = shapes['stack'][i].minY;
                ell.height = shapes['stack'][i].height;
                ell.width = shapes['stack'][i].width;
                ell.shapeType = shapes['stack'][i].shapeType;
                ell.noStroke = shapes['stack'][i].noStroke;
                ell.noFillColor = shapes['stack'][i].noFillColor;
                ell.strokeColor = shapes['stack'][i].strokeColor;
                ell.strokeWidth = shapes['stack'][i].strokeWidth;
                ell.completed = shapes['stack'][i].completed;
                shapeStack.push(ell);
            }
            else if (shapes['stack'][i].shapeType == "line") {
                li.x1 = shapes['stack'][i].x1;
                li.y1 = shapes['stack'][i].y1;
                li.x2 = shapes['stack'][i].x2;
                li.y2 = shapes['stack'][i].y2;
                li.shapeType = shapes['stack'][i].shapeType;
                li.noStroke = shapes['stack'][i].noStroke;
                li.noFillColor = shapes['stack'][i].noFillColor;
                li.strokeColor = shapes['stack'][i].strokeColor;
                li.strokeWidth = shapes['stack'][i].strokeWidth;
                li.completed = shapes['stack'][i].completed;
                shapeStack.push(li);
            }
        }
        text = JSON.parse(textS);
        //console.log(text['stack']);
        for (var i = 0; i < text['stack'].length; i++) {
            let t = new TextBox();
            t.shapeType = text['stack'][i].shapeType;
            t.text = text['stack'][i].text;
            t.completed = text['stack'][i].completed;
            t.x = text['stack'][i].x;
            t.y = text['stack'][i].y;
            t.size = text['stack'][i].size;
            t.noStroke = text['stack'][i].noStroke;
            t.strokeColor = text['stack'][i].strokeColor;
            t.strokeWidth = text['stack'][i].strokeWidth;
            t.fillColor = text['stack'][i].fillColor;
            t.noFillColor = text['stack'][i].noFillColor;
            textStack.push(t);
        }
        // drawStack = markerS;
        marks = JSON.parse(markerS);
        //console.log(marks['stack']);
        for (var i = 0; i < marks['stack'].length; i++) {
            let m = new Marker();
            m.markType = marks['stack'][i].markType;
            m.x1 = marks['stack'][i].x1;
            m.y1 = marks['stack'][i].y1;
            m.x2 = marks['stack'][i].x2;
            m.y2 = marks['stack'][i].y2;
            m.noStroke = marks['stack'][i].noStroke;
            m.strokeColor = marks['stack'][i].strokeColor;
            m.strokeWidth = marks['stack'][i].strokeWidth;
            drawStack.push(m);
        }
    };
    p.openWorkNoBack = function (shapeS, markerS, textS) {
        shapes = JSON.parse(shapeS);
        //console.log(shapes);
        for (var i = 2; i < shapes['stack'].length; i++) {
            let rect = new Rectangle;
            let ell = new Ellipse;
            let li = new Line;
            if (shapes['stack'][i].shapeType == "rectangle") {
                rect.x = shapes['stack'][i].x;
                rect.y = shapes['stack'][i].y;
                rect.maxX = shapes['stack'][i].maxX;
                rect.maxY = shapes['stack'][i].maxY;
                rect.minX = shapes['stack'][i].minX;
                rect.minY = shapes['stack'][i].minY;
                rect.height = shapes['stack'][i].height;
                rect.width = shapes['stack'][i].width;
                rect.shapeType = shapes['stack'][i].shapeType;
                rect.noStroke = shapes['stack'][i].noStroke;
                rect.noFillColor = shapes['stack'][i].noFillColor;
                rect.strokeColor = shapes['stack'][i].strokeColor;
                rect.strokeWidth = shapes['stack'][i].strokeWidth;
                rect.completed = shapes['stack'][i].completed;
                shapeStack.push(rect);
            }
            else if (shapes['stack'][i].shapeType == "ellipse") {
                ell.x = shapes['stack'][i].x;
                ell.y = shapes['stack'][i].y;
                ell.maxX = shapes['stack'][i].maxX;
                ell.maxY = shapes['stack'][i].maxY;
                ell.minX = shapes['stack'][i].minX;
                ell.minY = shapes['stack'][i].minY;
                ell.height = shapes['stack'][i].height;
                ell.width = shapes['stack'][i].width;
                ell.shapeType = shapes['stack'][i].shapeType;
                ell.noStroke = shapes['stack'][i].noStroke;
                ell.noFillColor = shapes['stack'][i].noFillColor;
                ell.strokeColor = shapes['stack'][i].strokeColor;
                ell.strokeWidth = shapes['stack'][i].strokeWidth;
                ell.completed = shapes['stack'][i].completed;
                shapeStack.push(ell);
            }
            else if (shapes['stack'][i].shapeType == "line") {
                li.x1 = shapes['stack'][i].x1;
                li.y1 = shapes['stack'][i].y1;
                li.x2 = shapes['stack'][i].x2;
                li.y2 = shapes['stack'][i].y2;
                li.shapeType = shapes['stack'][i].shapeType;
                li.noStroke = shapes['stack'][i].noStroke;
                li.noFillColor = shapes['stack'][i].noFillColor;
                li.strokeColor = shapes['stack'][i].strokeColor;
                li.strokeWidth = shapes['stack'][i].strokeWidth;
                li.completed = shapes['stack'][i].completed;
                shapeStack.push(li);
            }
        }
        text = JSON.parse(textS);
        //console.log(text['stack']);
        for (var i = 0; i < text['stack'].length; i++) {
            let t = new TextBox();
            t.shapeType = text['stack'][i].shapeType;
            t.text = text['stack'][i].text;
            t.completed = text['stack'][i].completed;
            t.x = text['stack'][i].x;
            t.y = text['stack'][i].y;
            t.size = text['stack'][i].size;
            t.noStroke = text['stack'][i].noStroke;
            t.strokeColor = text['stack'][i].strokeColor;
            t.strokeWidth = text['stack'][i].strokeWidth;
            t.fillColor = text['stack'][i].fillColor;
            t.noFillColor = text['stack'][i].noFillColor;
            textStack.push(t);
        }
        // drawStack = markerS;
        marks = JSON.parse(markerS);
        //console.log(marks['stack']);
        for (var i = 0; i < marks['stack'].length; i++) {
            let m = new Marker();
            m.markType = marks['stack'][i].markType;
            m.x1 = marks['stack'][i].x1;
            m.y1 = marks['stack'][i].y1;
            m.x2 = marks['stack'][i].x2;
            m.y2 = marks['stack'][i].y2;
            m.noStroke = marks['stack'][i].noStroke;
            m.strokeColor = marks['stack'][i].strokeColor;
            m.strokeWidth = marks['stack'][i].strokeWidth;
            drawStack.push(m);
        }
    };

}

let mainCanvas = new p5(mainCanvasOBJ, "mainCanvasContainer");