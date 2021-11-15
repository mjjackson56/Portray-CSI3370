function loadMainPage() {
    colorSelector();
    //console.log(window.localStorage.getItem("savedWorkShapeStack"));
    if (window.localStorage.getItem("has_back") == 1) {
        mainCanvas.openWork(window.localStorage.getItem("savedWork"), window.localStorage.getItem("savedWorkShapeStack"), window.localStorage.getItem("savedWorkMarkerStack"), window.localStorage.getItem("savedWorkTextStack"));
    }
    else {
        mainCanvas.openWorkNoBack( window.localStorage.getItem("savedWorkShapeStack"), window.localStorage.getItem("savedWorkMarkerStack"), window.localStorage.getItem("savedWorkTextStack"));
    }
}