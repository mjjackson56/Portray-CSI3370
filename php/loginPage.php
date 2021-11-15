<?php
session_start();
?>
<html>

<head>
    <link rel="shortcut icon" href="../assets/icons/Portray_Favicon.png">
    <script src="/js/loginUser.js"></script>
    <script src="/js/goToRegPage.js"></script>
    <link rel="stylesheet" href="/css/nav.css">
    <title>Portray - Login</title>

    <style>
        .login {
            text-align: center;
            padding: 200px;
            color: white;
        }

        .field {
            font-size: 30px;
        }

        .resize {
            font-style: bold;
            font-size: 30px;
            color: white;

        }

        .center {
            text-align: center;
            font-size: 42px;
            color: white;
        }

        body {
            font-family: Arial, Helvetica, sans-serif;
            margin: 0;
            background-color: #1565c0;
        }

        .card {
            box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 1.0);
            margin: 8px;
            padding: 4px;
            background-color: #003c8f;
        }
    </style>
    <?php include 'navbar.php'; ?>
</head>

<body>
    <div class="Login center">
        <div class="card">
            <h1 class="center">Login</h1>

            <form id="Login">

                <label class="resize">Username:</label>

                <input class="field" id="user_name" type="text" required>

                <br>

                <label class="resize">Password:</label>
                <input class="field" id="user_password" type="Password" required>

                <br>

                <button class=loginButton id="loginUserButton" onclick="loginUser()">Login</button>
                <button id=register class=registerButton onclick="goToRegPage()">Register</button>

            </form>
        </div>
    </div>
</body>

</html>