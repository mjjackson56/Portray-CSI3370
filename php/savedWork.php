<?php
session_start();
$_SESSION['openedWork'] = false;
?>

<html>

    <head>
    <link rel="shortcut icon" href="../assets/icons/Portray_Favicon.png">
    <link rel="stylesheet" href="/css/nav.css">
    <link rel="stylesheet" href="/css/saved_work_style.css">
    <script src="/js/getSavedWork.js"></script>
    <script src="/js/openSavedWork.js"></script>
    <script src="/js/deleteSavedWork.js"></script>
        
    <title>Portray - Saved Work</title>
    </head>
    
    <?php include 'navbar.php'; ?>
    
    <body id="body" onload="getSavedWork()">
        <h1 class="center">My Documents</h1>
    </body>
    
</html>