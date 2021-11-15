<?php
session_start();

?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <link rel="shortcut icon" href="assets/icons/Portray_Favicon.png">
    <meta name="viewport" content="width=device-width, initial-scale=0.4, user-scalable=no">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">

    <link rel="stylesheet" href="/css/nav.css">
    <link rel="stylesheet" href="/css/index.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.2.0/p5.min.js" integrity="sha512-b/htz6gIyFi3dwSoZ0Uv3cuv3Ony7EeKkacgrcVg8CMzu90n777qveu0PBcbZUA7TzyENGtU+qZRuFAkfqgyoQ==" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.2.0/p5.js" integrity="sha512-cuCpFhuSthtmbmQ5JjvU7msRYynRI67jVHsQhTP8RY+H4BC9qa9kQJeHTomV9/QnOWJbDpLFKdbIHtqTomJJug==" crossorigin="anonymous"></script>
    <script src="/js/canvas.js"></script>
    <script src="/js/customColor.js"></script>
    <script src="/js/colorSelector.js"></script>
    <script src="/js/uploadWork.js"></script>
    <script src="/js/uploadFileDialogue.js"></script>
    <script src="/js/openSavedWork.js"></script>
    <script src="/js/loadMainPage.js"></script>
    <script src="/js/loadMainPageNoWork.js"></script>
    <script src="/js/toggleToolbox.js"></script>
    <script src="/js/saveWork.js"></script>

    <title>Portray - Home</title>

</html>
<?php
include 'php/navbar.php';
if ($_SESSION['openedWork'] == true) {
    echo '<body onload="loadMainPage()">';
} else {
    echo '<body onload="loadMainPageNoWork()">';
}
?>
<div id="mainContent">
    <div id="toolbox">
        <div id="pulloutTab" onclick="toggleToolbox()">
            <svg aria-hidden="true" id="leftArrow" focusable="false" data-prefix="fas" data-icon="chevron-left" class="svg-inline--fa fa-chevron-left fa-w-10" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                <path fill="currentColor" d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"></path>
            </svg>
            <svg aria-hidden="true" id="rightArrow" focusable="false" data-prefix="fas" data-icon="chevron-right" class="svg-inline--fa fa-chevron-right fa-w-10" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                <path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
            </svg>
        </div>

        <div class="row" id="sizeRow">
            <input type="range" min="1" max="100" value="20" class="slider mx-1" id="myRange">
            <button type="button" class="btn btn-danger mx-1" onclick="mainCanvas.clear_button()">Clear</button>
            <select class="btn-secondary mx-1 rounded box-shadow" id="canvasSizeSelector" onchange="mainCanvas.changeCanvasSize()">
                <option value="small">Small</option>
                <option selected value="medium">Medium</option>
                <option value="large">Large</option>
            </select>
        </div>

        <div class="row" id="penToolRow">
            <span>Pen Tools</span>
            <svg id="markerTool" onclick="mainCanvas.selectMarker()" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="marker" class="svg-inline--fa fa-marker fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path fill="currentColor" d="M93.95 290.03A327.038 327.038 0 0 0 .17 485.11l-.03.23c-1.7 15.28 11.21 28.2 26.49 26.51a327.02 327.02 0 0 0 195.34-93.8l75.4-75.4-128.02-128.02-75.4 75.4zM485.49 26.51c-35.35-35.35-92.67-35.35-128.02 0l-21.76 21.76-36.56-36.55c-15.62-15.62-40.95-15.62-56.56 0L138.47 115.84c-6.25 6.25-6.25 16.38 0 22.63l22.62 22.62c6.25 6.25 16.38 6.25 22.63 0l87.15-87.15 19.59 19.59L191.98 192 320 320.02l165.49-165.49c35.35-35.35 35.35-92.66 0-128.02z"></path>
            </svg>
            <svg id="highlighterTool" onclick="mainCanvas.selectHighlighter()" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="highlighter" class="svg-inline--fa fa-highlighter fa-w-17" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 544 512">
                <path fill="currentColor" d="M0 479.98L99.92 512l35.45-35.45-67.04-67.04L0 479.98zm124.61-240.01a36.592 36.592 0 0 0-10.79 38.1l13.05 42.83-50.93 50.94 96.23 96.23 50.86-50.86 42.74 13.08c13.73 4.2 28.65-.01 38.15-10.78l35.55-41.64-173.34-173.34-41.52 35.44zm403.31-160.7l-63.2-63.2c-20.49-20.49-53.38-21.52-75.12-2.35L190.55 183.68l169.77 169.78L530.27 154.4c19.18-21.74 18.15-54.63-2.35-75.13z"></path>
            </svg>
            <svg id="eraserTool" onclick="mainCanvas.selectEraser()" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="eraser" class="svg-inline--fa fa-eraser fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path fill="currentColor" d="M497.941 273.941c18.745-18.745 18.745-49.137 0-67.882l-160-160c-18.745-18.745-49.136-18.746-67.883 0l-256 256c-18.745 18.745-18.745 49.137 0 67.882l96 96A48.004 48.004 0 0 0 144 480h356c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12H355.883l142.058-142.059zm-302.627-62.627l137.373 137.373L265.373 416H150.628l-80-80 124.686-124.686z"></path>
            </svg>
        </div>

        <!-- <button type="button" class="btn btn-secondary mx-1" onclick="mainCanvas.selectShape()">Shape</button> -->

        <div class="row" id="shapeToolRow">
            <span>Shape Tools</span>
            <button id="rectangleTool" onclick="mainCanvas.selectShape('rectangle')">
                <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="square" class="svg-inline--fa fa-square fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path fill="currentColor" d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-6 400H54c-3.3 0-6-2.7-6-6V86c0-3.3 2.7-6 6-6h340c3.3 0 6 2.7 6 6v340c0 3.3-2.7 6-6 6z"></path>
                </svg>
            </button>
            <button id="ellipseTool" onclick="mainCanvas.selectShape('ellipse')">
                <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="circle" class="svg-inline--fa fa-circle fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200z"></path>
                </svg>
            </button>
            <button id="lineTool" onclick="mainCanvas.selectShape('line')">
                <svg height="25" width="25">
                    <line x1="-15" y1="-15" x2="35" y2="35" style="stroke:rgb(0,0,0);stroke-width:2" />
                </svg>
            </button>
        </div>


        <div class="row" id="textInputRow">
            <button type="button" onclick="mainCanvas.selectTextBox()">Textbox</button>
            <span id="fontSizeLabel"></span>
            <input type="hidden" min="8" max="500" value="32" class="slider mx-1" id="fontSize" oninput="mainCanvas.updateFontSizeLabel()">
            <input type="hidden" id="textboxInput" name="textboxInput">
            <button type="button" id="textBoxAdd" style="visibility: hidden;" onclick="mainCanvas.submitTextBox()">Add Text</button>
        </div>

        <?php
        if (isset($_SESSION['username'])) {
            echo '<div class="uploadRow">';
            echo '<input id="UploadWork" type="file" style="display:none;" />';
            echo '<input type="button" id="choose_file" value="Choose File" onclick="showUploadDialogue();" />';
            echo '<input type="button" id="upload_file" value="Upload File" onclick="uploadWorkLocal();" disabled />';
            echo '</div>';
        }
        ?>


        <table class="" id="colorsTable"></table>


        <div class="row" id="customeColorContainer">
            <span>Custom Color</span>
            <div id="colorSlidersDiv">
                <input type="range" min="1" max="255" value="20" id="colorR">
                <input type="range" min="1" max="255" value="20" id="colorG">
                <input type="range" min="1" max="255" value="20" id="colorB">
            </div>
        </div>

        <div class="row" id="logoContainer">
            <div>
                <img src="images/Untitled.png" alt="">
            </div>
        </div>



        <div class="row" id="saveWorkRow">
            <input id="SaveWork" type="submit" style="display:none;" />
            <svg onclick="mainCanvas.saveSketch()" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="save" class="svg-inline--fa fa-save fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path fill="currentColor" d="M433.941 129.941l-83.882-83.882A48 48 0 0 0 316.118 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V163.882a48 48 0 0 0-14.059-33.941zM224 416c-35.346 0-64-28.654-64-64 0-35.346 28.654-64 64-64s64 28.654 64 64c0 35.346-28.654 64-64 64zm96-304.52V212c0 6.627-5.373 12-12 12H76c-6.627 0-12-5.373-12-12V108c0-6.627 5.373-12 12-12h228.52c3.183 0 6.235 1.264 8.485 3.515l3.48 3.48A11.996 11.996 0 0 1 320 111.48z"></path>
            </svg>
            <svg onclick="mainCanvas.saveWorkLocal()" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="download" class="svg-inline--fa fa-download fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path fill="currentColor" d="M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"></path>
            </svg>
        </div>
    </div>

    <div class="container mx-5" id="mainCanvasContainer"></div>
</div>

</body>

</html>