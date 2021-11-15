<?php
session_start();

include_once 'databaseconnect.php';

$filename = $_FILES['file']['name'];
$target_dir = "/home/portray-admin/school/csi-3370/CSI-3370-Project/saved_work/" . $_SESSION['username'] . "/$filename";
$uploadOk = 1;
$file_extension = pathinfo($target_dir, PATHINFO_EXTENSION);
$file_extension = strtolower($file_extension);


$response = 0;
if (move_uploaded_file($_FILES['file']['tmp_name'], $target_dir)) {
  $response = 1;
}
$user_id = $_SESSION['userid'];
$has_back = 1;
$sql = "INSERT INTO saved_work_paths (user_id, path_string, path_file_name, has_background) VALUES ('$user_id', '$target_dir', '$filename', '$has_back');";
mysqli_query($conn, $sql);

//echo $has_back;
exit;
