// affichage de pages

document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');

    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            sections.forEach(section => {
                section.style.display = section.id === targetId ? 'block' : 'none';
            });
        });
    });
});

// afficher les éléments dans mon profil

    function afficherCV() {
    document.getElementById('cvContent').style.display = 'block';
    document.getElementById('lettreMotivationContent').style.display = 'none';
    document.getElementById('quiSuisJeContent').style.display = 'none';
    document.getElementById('mesCompetencesContent').style.display = 'none';
    // Masquer d'autres contenus au besoin
}

    function afficherLettreMotivation() {
    document.getElementById('cvContent').style.display = 'none';
    document.getElementById('lettreMotivationContent').style.display = 'block';
    document.getElementById('quiSuisJeContent').style.display = 'none';
    document.getElementById('mesCompetencesContent').style.display = 'none';
    // Masquer d'autres contenus au besoin
}

    function afficherQuiSuisJe() {
    document.getElementById('cvContent').style.display = 'none';
    document.getElementById('lettreMotivationContent').style.display = 'none';
    document.getElementById('quiSuisJeContent').style.display = 'block';
    document.getElementById('mesCompetencesContent').style.display = 'none';
    // Masquer d'autres contenus au besoin
}

    function afficherMesCompetences() {
    document.getElementById('cvContent').style.display = 'none';
    document.getElementById('lettreMotivationContent').style.display = 'none';
    document.getElementById('quiSuisJeContent').style.display = 'none';
    document.getElementById('mesCompetencesContent').style.display = 'block';
    // Masquer d'autres contenus au besoin
}

//afficher le contenu des liens

function toggleContent(contentId) {
    var content = document.getElementById(contentId);

    // Si le contenu est visible, le masquer ; sinon, l'afficher
    if (content.style.display === 'block') {
        content.style.display = 'none';
    } else {
        content.style.display = 'block';
    }
}

// refermer les liens en recliquant dessus
function afficherCV() {
    toggleContent('cvContent');
    hideOtherContents(['lettreMotivationContent', 'quiSuisJeContent', 'mesCompetencesContent']);
}

function afficherLettreMotivation() {
    toggleContent('lettreMotivationContent');
    hideOtherContents(['cvContent', 'quiSuisJeContent', 'mesCompetencesContent']);
}

function afficherQuiSuisJe() {
    toggleContent('quiSuisJeContent');
    hideOtherContents(['cvContent', 'lettreMotivationContent', 'mesCompetencesContent']);
}

function afficherMesCompetences() {
    toggleContent('mesCompetencesContent');
    hideOtherContents(['cvContent', 'lettreMotivationContent', 'quiSuisJeContent']);
}

// afficher le contenu d'un lien même si l'on clique sur un autre

function hideOtherContents(contentIds) {
    // Masquer les autres contenus spécifiés
    contentIds.forEach(function (id) {
        var content = document.getElementById(id);
        if (content.style.display === 'block') {
            content.style.display = 'none';
        }
    });
}
function toggleContent(contentId) {
    var content = document.getElementById(contentId);
    content.style.display = (content.style.display === 'none') ? 'block' : 'none';
}

// afficher des flèches selon le contenu déployer ou non
function toggleContent(contentId, arrowId) {
    var content = document.getElementById(contentId);
    var arrow = document.getElementById(arrowId);

    if (content.style.display === 'none' || content.style.display === '') {
        content.style.display = 'block';
        arrow.classList.remove('arrow-down');
        arrow.classList.add('arrow-up');
    } else {
        content.style.display = 'none';
        arrow.classList.remove('arrow-up');
        arrow.classList.add('arrow-down');
    }
}
//ouverture de pdf
function openPdfPreview(pdfUrl) {
    window.open(pdfUrl, '_blank');
}



























