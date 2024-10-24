const createHeader = () => {
    const headerElement = document.createElement("header");
    const navHTML = `<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
        <a class="navbar-brand" href="/">Villegas Amador</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
                <li class="nav-item">
                    <a class="nav-link" href="/">Inicio</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/pages/psychological-services.html">Servicios de Psicología</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/pages/software-development.html">Desarrollo de Software</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/pages/content-creation.html">Creación de Contenido</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/pages/contact.html">Contacto</a>
                </li>
            </ul>
        </div>
    </div>
</nav>`;
    headerElement.innerHTML = navHTML;
    document.body.prepend(headerElement);
};

const highlightActiveLink = () => {
    const currentPath = window.location.pathname;
    document.querySelectorAll("nav a").forEach(link => {
        const linkPath = new URL(link.href).pathname;
        if (linkPath === currentPath) {
            link.classList.add("active");
            link.setAttribute("aria-current", "page");
        }
    });
};

const createFooter = () => {
    const footerElement = document.createElement("footer");
    const footnoteHTML = `<div class="container">
            <p>&copy; 2024 Villegas Amador. Todos los derechos reservados.</p> 
            <a href="https://www.linkedin.com/in/villegasapsico" target="_blank">LinkedIn</a> | 
            <a href="https://github.com/villegasamador" target="_blank">GitHub</a> | 
            <a href="mailto:villegasapsico@gmail.com" target="_blank">Email</a>
        </div>`;
    footerElement.innerHTML = footnoteHTML;
    const firstScript = document.querySelector("script");
    if (firstScript) {
        firstScript.insertAdjacentElement("beforebegin", footerElement);
    }
};

createHeader();
highlightActiveLink();
createFooter();
