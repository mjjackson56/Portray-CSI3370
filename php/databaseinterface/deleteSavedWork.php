<?php
session_start();

include_once 'databaseconnect.php';

if (array_key_exists('work_id', $_POST)) {
    $path_id = $_POST['work_id'];
    $sql = "SELECT path_string FROM saved_work_paths WHERE path_id = '$path_id';";
    $result = mysqli_query($conn, $sql);
    $row = mysqli_fetch_assoc($result);
    unlink($row['path_string']);
    $sql = "DELETE FROM saved_work_paths WHERE path_id = '$path_id';";
    mysqli_query($conn, $sql);
}
else {
    echo "Something Went Wrong With the Input";
}