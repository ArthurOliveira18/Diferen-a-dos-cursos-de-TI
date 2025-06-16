document.addEventListener('DOMContentLoaded', () => {
    // Array de cursos com a nova propriedade 'paginaURL'
    const cursos = [
        {
            id: "ciencia-computacao",
            nome: "Ciência da Computação",
            duracao: "4-5 anos",
            nivel: "Bacharelado",
            foco: "Teoria e Fundamentos",
            descricao: "Curso mais teórico e abrangente, focado em algoritmos, matemática e pesquisa científica.",
            gradientClass: "gradient-blue",
            imagePlaceholder: "../img/Ciencia-da-Computacao.jpg",
            paginaURL: "cienciaComp.html" // CORRIGIDO
        },
        {
            id: "engenharia-software",
            nome: "Engenharia de Software",
            duracao: "4-5 anos",
            nivel: "Bacharelado",
            foco: "Desenvolvimento e Gestão",
            descricao: "Focado no desenvolvimento de software em larga escala e gestão de projetos.",
            gradientClass: "gradient-green",
            imagePlaceholder: "../img/eng-software-curso.webp",
            paginaURL: "engSoft.html" // CORRIGIDO
        },
        {
            id: "analise-desenvolvimento",
            nome: "Análise e Desenvolvimento de Sistemas",
            duracao: "2-3 anos",
            nivel: "Tecnólogo",
            foco: "Desenvolvimento Prático",
            descricao: "Curso prático e direto, focado no desenvolvimento de aplicações e sistemas.",
            gradientClass: "gradient-purple",
            imagePlaceholder: "../img/ADS.jpg",
            paginaURL: "ads.html" // CORRIGIDO
        },
        {
            id: "sistemas-informacao",
            nome: "Sistemas de Informação",
            duracao: "4 anos",
            nivel: "Bacharelado",
            foco: "Negócios e TI",
            descricao: "Combina tecnologia com gestão empresarial e análise de negócios.",
            gradientClass: "gradient-orange",
            imagePlaceholder: "../img/sistema-de-informacao.webp",
            // ATENÇÃO: Na imagem, 'sistInf' parece uma pasta. 
            // Se o arquivo for index.html dentro dela, o caminho seria "sistInf/index.html".
            // Estou assumindo que é um arquivo .html na raiz da pasta 'html'.
            paginaURL: "sistInf.html" // CORRIGIDO (VERIFIQUE ESTE CAMINHO)
        },
        {
            id: "engenharia-computacao",
            nome: "Engenharia da Computação",
            duracao: "5 anos",
            nivel: "Bacharelado",
            foco: "Hardware e Software",
            descricao: "Integra conhecimentos de hardware, software e eletrônica.",
            gradientClass: "gradient-red",
            imagePlaceholder: "../img/Engenharia-da-computacao.jpg",
            paginaURL: "engComp.html" // CORRIGIDO
        },
        {
            id: "redes-computadores",
            nome: "Redes de Computadores",
            duracao: "2-3 anos",
            nivel: "Tecnólogo",
            foco: "Infraestrutura",
            descricao: "Especializado em redes, segurança e infraestrutura de TI.",
            gradientClass: "gradient-cyan",
            imagePlaceholder: "../img/rede-computadores.avif",
            paginaURL: "redesComp.html" // CORRIGIDO
        },
    ];

    const carouselContent = document.querySelector('.carousel-content');
    const prevButton = document.getElementById('carouselPrev');
    const nextButton = document.getElementById('carouselNext');

    let carouselItemsElements = [];
    let totalItems = 0;
    let itemsPerView = 3;
    let currentIndex = 0;
    let itemWidth = 0;

    function createCursoCard(curso) {
        return `
            <div class="carousel-item">
                <div class="card-group">
                    <div class="card">
                        <div class="card-content">
                            <div class="card-header">
                                <div class="card-icon-container ${curso.gradientClass}">
                                </div>
                                <span class="badge">${curso.nivel}</span>
                            </div>
                            <div class="card-image-container">
                                <img src="${curso.imagePlaceholder}" alt="${curso.nome}" class="card-image">
                                <div class="card-image-overlay"></div>
                                <div class="card-image-progress-container">
                                    <div class="card-image-progress-bar ${curso.gradientClass}"></div>
                                </div>
                            </div>
                            <h4 class="card-title">${curso.nome}</h4>
                            <p class="card-description">${curso.descricao}</p>
                            <div class="info-cards-container">
                                <div class="info-card">
                                    <span class="info-label">Duração:</span>
                                    <span class="info-value">${curso.duracao}</span>
                                </div>
                                <div class="info-card">
                                    <span class="info-label">Foco:</span>
                                    <span class="info-value">${curso.foco}</span>
                                </div>
                            </div>
                            <a href="${curso.paginaURL}" class="card-button-link">
                                <button class="card-button ${curso.gradientClass}">
                                    Explorar Curso
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    function applyCarouselTransform() {
        if (totalItems === 0) {
            carouselContent.style.transform = `translateX(0px)`;
            return;
        }

        let transformValue;

        if (totalItems <= itemsPerView) {
            transformValue = 0;
        } else if (currentIndex >= (totalItems - itemsPerView)) {
            const carouselContainer = carouselContent.parentElement;
            const scrollableWidth = carouselContent.scrollWidth;
            const viewportWidth = carouselContainer.clientWidth;

            const maxTranslateX = scrollableWidth - viewportWidth;
            transformValue = -Math.max(0, maxTranslateX);
        } else {
            transformValue = -currentIndex * itemWidth;
        }
        carouselContent.style.transform = `translateX(${transformValue}px)`;
    }

    function updateButtonStates() {
        if (totalItems === 0 || totalItems <= itemsPerView) {
            prevButton.disabled = true;
            nextButton.disabled = true;
        } else {
            prevButton.disabled = currentIndex <= 0;
            nextButton.disabled = currentIndex >= (totalItems - itemsPerView);
        }
    }

    function initializeCarousel() {
        carouselItemsElements = carouselContent.querySelectorAll('.carousel-item');
        totalItems = carouselItemsElements.length;

        if (totalItems === 0) {
            itemWidth = 0;
            itemsPerView = 1;
            currentIndex = 0;
        } else {
            const screenWidth = window.innerWidth;
            if (screenWidth < 768) { // md
                itemsPerView = 1;
            } else if (screenWidth < 1024) { // lg
                itemsPerView = 2;
            } else {
                itemsPerView = 3;
            }
            itemWidth = carouselItemsElements[0].offsetWidth;
        }
        applyCarouselTransform();
        updateButtonStates();
    }


    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            applyCarouselTransform();
            updateButtonStates();
        }
    });

    nextButton.addEventListener('click', () => {
        if (currentIndex < (totalItems - itemsPerView)) {
            currentIndex++;
            applyCarouselTransform();
            updateButtonStates();
        }
    });

    window.addEventListener('resize', () => {
        initializeCarousel();
    });

    // Gerar os cards dos cursos
    cursos.forEach(curso => {
        carouselContent.innerHTML += createCursoCard(curso);
    });

    // Inicializar o carrossel após os cards serem adicionados ao DOM
    initializeCarousel();
});