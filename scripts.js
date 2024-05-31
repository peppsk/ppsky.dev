const translations = {
    en: {
        "home-link": "Home",
        "blog-link": "Blog",
        "news-link": "News",
        "tutorials-link": "Tutorials",
        "resources-link": "Resources",
        "contact-link": "Contact",
        "welcome-title": "Who We Are",
        "welcome-text": "Welcome to ppsky.dev, your go-to site for the latest tech news, ethical hacking tutorials, and deep web insights.",
        "latest-title": "Latest Content"
    },
    it: {
        "home-link": "Home",
        "blog-link": "Blog",
        "news-link": "News",
        "tutorials-link": "Tutorial",
        "resources-link": "Risorse",
        "contact-link": "Contatti",
        "welcome-title": "Chi Siamo",
        "welcome-text": "Benvenuti su ppsky.dev, il tuo sito di riferimento per le ultime novità tecnologiche, tutorial di hacking etico e approfondimenti sul deep web.",
        "latest-title": "Ultimi Contenuti"
    },
    de: {
        "home-link": "Startseite",
        "blog-link": "Blog",
        "news-link": "Nachrichten",
        "tutorials-link": "Tutorials",
        "resources-link": "Ressourcen",
        "contact-link": "Kontakt",
        "welcome-title": "Wer Wir Sind",
        "welcome-text": "Willkommen bei ppsky.dev, Ihrer Anlaufstelle für die neuesten Tech-News, ethische Hacking-Tutorials und Deep-Web-Einblicke.",
        "latest-title": "Neueste Inhalte"
    }
};

function setLanguage(language) {
    for (const key in translations[language]) {
        document.getElementById(key).innerText = translations[language][key];
    }
}

document.addEventListener("DOMContentLoaded", () => {
    setLanguage('en'); // Default language
});
