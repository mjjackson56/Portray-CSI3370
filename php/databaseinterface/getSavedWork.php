<?php
session_start();
include_once 'databaseconnect.php';
$user_id =  $_SESSION['userid'];
$sql = "SELECT * FROM saved_work_paths WHERE user_id = '$user_id';";
$r = array();
$j = array();
if ($result = mysqli_query($conn, $sql)) {
    while ($row = mysqli_fetch_assoc($result)) {
        $image = $row['path_string'];
        $imageData = base64_encode(file_get_contents($image));
        $src = 'data: '.mime_content_type($image).';base64,'.$imageData;        
        array_push($r, $src);
        array_push($j, $row['path_id']);
        
    }
    $data = array($r, $j);
    echo json_encode($data);
}