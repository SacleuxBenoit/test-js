<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../style.css">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>

    <h1 id="firstTitle">Le joueur 1 commence.</h1>

    <div id="player1">
        <p id="pseudoP1"></p>
        <p class="life" id="showLifeP1"></p>
        <p class="mana" id="showManaP1"></p>
        <button onclick="quickAttackP1()" id="disabledQuickAttackP1">Attaque rapide</button>
        <button onclick="slowAttackP1()" id="disabledSlowAttackP1">Attaque lente</button>
        <button onclick="healP1()" id="disabledHealP1" disabled>Heal</button>
        <button onclick="exec()" id="buttonExecution" disabled>Execution</button>
    </div>

    <div id="player2">
        <p class="life" id="showLifeP2"></p>
        <p class="mana" id="showManaP2"></p>
        <button onclick="quickAttackP2()" id="disabledQuickAttackP2">Attaque rapide</button>
        <button onclick="slowAttackP2()" id="disabledSlowAttackP2">Attaque lente</button>
        <button onclick="healP2()" id="disabledHealP2" disabled>Heal</button>
    </div>

    <div>
        <p id="result"></p>
    </div>
    <div>
        <button onclick="reset()">Reset</button>
    </div>

    <script src="../js/script.js"></script>
    <script src="../js/firstPlayer.js"></script>
    <script src="../js/secondPlayer.js"></script>
</body>
</html>