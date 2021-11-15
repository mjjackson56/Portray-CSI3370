<?php

session_start();

include_once 'databaseconnect.php';
if (array_key_exists('work_id', $_POST)) {
    $work_id = $_POST['work_id'];
    $sql = "SELECT * FROM saved_work_paths WHERE path_id = $work_id;";
    $result = mysqli_query($conn, $sql);
    if ($result = mysqli_query($conn, $sql)) {
        $row = mysqli_fetch_assoc($result);
        $_SESSION['openedWork'] = true;
        if ($has_Back = $row['has_background'] == 1) {
            $image = $row['path_string'];
            $imageData = base64_encode(file_get_contents($image));
            $src = 'data: ' . mime_content_type($image) . ';base64,' . $imageData;
            $r = $src;
            $j = $row['path_id'];
            $s = $row['shapes_stack'];
            $m = $row['marker_stack'];
            $t = $row['text_stack'];
            $b = $row['has_background'];
            $data = array($b, $r, $j, $s, $m, $t);
            echo json_encode($data);
        }
        else {
            $j = $row['path_id'];
            $s = $row['shapes_stack'];
            $m = $row['marker_stack'];
            $t = $row['text_stack'];
            $b = $row['has_background'];
            $data = array($b, $j, $s, $m, $t);
            echo json_encode($data);
        }
    }
}
