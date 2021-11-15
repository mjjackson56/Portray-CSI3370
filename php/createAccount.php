<html>


<head>
    <link rel="shortcut icon" href="../assets/icons/Portray_Favicon.png">
    <script src="/js/createAccount.js"></script>
    <link rel="stylesheet" href="/css/nav.css">
    <title>Portay - Register</title>

    <style>
        .register {
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
    <div class="Register">
        <div class="card">
            <h1 class="center">Register</h1><br>

            <form id="Register">

                <label class="resize">Username:</label>
                <input class="field" id="username" type="text" required>

                <br><br>

                <label class="resize">Password:</label>
                <input class="field" id="password" type="Password" required>

                <br><br>

                <button id=register class=registerButton onclick="createAccount()">Register</button>

            </form>
        </div>
    </div>
</body>

</html>