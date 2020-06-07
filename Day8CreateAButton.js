<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Button</title>
        <link rel="stylesheet" href="css/button.css" type="text/css">
    </head>

    <body>
        <script src="js/button.js" type="text/javascript"></script>
        <button id = 'btn' onclick="counter()">0</button>
    </body>
</html>

#btn {
    width: 96px;
    height: 48px;
    font-size: 24px;
}

function counter(){
document.getElementById('btn').innerHTML++;
}
