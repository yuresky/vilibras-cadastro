<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" href="../../../public/images/Logo.png" type="image/x-icon">
    <link rel="stylesheet" href="../../../public/css/login.css">
    <script src="https://accounts.google.com/gsi/client" async defer></script>
    <script src="https://unpkg.com/jwt-decode/build/jwt-decode.js"></script>
    <script src="../../../public/js/login.js"></script>
    <title>Login | VILIBRAS</title>
</head>
<body>
    <div class="background-image" id="background-image">
        <div class="login-container" id="login-container">
            <div class="avatar"></div>
            <h1>Faça o seu login</h1>
            <img src="../../../public/images/Logo.png" id="foto" alt="">
            <form method="POST" action="../../actions/usuario/loginUsuario.php">
                <input type="text" name="email" placeholder="E-mail" required>
                <input type="password" name="senha" placeholder="Senha" required>
                <button type="submit"><a href="../dashboard/dashboard.php"></a>Login</button>
            <div id="buttonDiv"></div>
            </form>


            <div class="links">
                <a href="#">Redefinir senha</a>
                <a href="#">|</a>
                <a href="cadastro.php">Criar uma nova conta</a> <br>
            </div>

        </div>
    </div>
</body>
</html>
