<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" href="/img/Yinyang.ico" type="image/x-icon">
    <title>Portfolio de Thibault</title>
    <link rel="stylesheet" href="style/style1.css">
    <script src="index.js" defer></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>
</head>



<body class="container-fluid d-flex flex-column p-0 h-100">
<header>
    <?php require 'include/menu.html'; ?>

</header>
<main class="p-3">
    <div id="msg"></div>
    <section id="profil" style="display: none">
        <?php require 'include/profil.html'; ?>
    </section>
    <section id="apropos" style="display: none">
        <?php require 'include/apropos.html' ?>
    </section>
    <section id="contact" style="display: none">
        <?php require 'include/contact.html' ?>
    </section>


</main>
<footer class="p-3">
    <?php require 'include/pied.html'; ?>
</footer>
</body>

</html>

