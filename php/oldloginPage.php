<html>

    
    <head>
    
    <link rel="stylesheet" href="/css/nav.css">
    <title>Portay - Login/Register</title>
        
    <style>
        
        .login{
            text-align: center;
            padding: 200px;
        }
        
        .field{
            font-size: 30px;
        }
        
        .resize{
            font-style: bold;
            font-size: 30px;
        }
        
        .center{
            text-align: center;
            font-size: 42px;
        }
        
        body{
            font-family: Arial, Helvetica, sans-serif;
            margin: 0;
        }
        
        </style>
        
    </head>
    
    <?php include 'navbar.php'; ?>

    <body>    
    <div class="Login">
    <h1 class="center">Login/Register</h1><br>  

     <form id="Login"> 

        <label class="resize">Username:</label>
    
        <input class="field" type="text" required> 
        
        <br><br>    

        <label class="resize">Password:</label>    
        <input class="field" type="Password" required> 
        
        <br><br>      

        <button id = login class = loginButton >Login</button>  
            

        <button id = register class= registerButton>Register</button>
        
        <br><br><br>
        
        <input type="checkbox" >    
        <span>Remember me</span>   
        
        <br><br>   

        <a href="#">Forgot Password?</a>   


    </form>     
</div>    
</body>   
    
</html>