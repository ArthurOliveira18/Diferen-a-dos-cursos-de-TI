document.addEventListener('DOMContentLoaded', () => {
    const cursos = [
        {
            id: "ciencia-computacao",
            nome: "Ciência da Computação",
            duracao: "4-5 anos",
            nivel: "Bacharelado",
            foco: "Teoria e Fundamentos",
            descricao: "Curso mais teórico e abrangente, focado em algoritmos, matemática e pesquisa científica.",
            iconSVG: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.42 10.72A6.5 6.5 0 0 0 12 8.5a6.5 6.5 0 0 0-9.42 2.22"/><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/><path d="m22 10.5-10-6-10 6"/><path d="M6 18v2c0 .55.45 1 1 1h10c.55 0 1-.45 1-1v-2"/></svg>`,
            gradientClass: "gradient-blue",
            imagePlaceholder: "https://via.placeholder.com/400x192/2563EB/FFFFFF?text=Computacao"
        },
        {
            id: "engenharia-software",
            nome: "Engenharia de Software",
            duracao: "4-5 anos",
            nivel: "Bacharelado",
            foco: "Desenvolvimento e Gestão",
            descricao: "Focado no desenvolvimento de software em larga escala e gestão de projetos.",
            iconSVG: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 18l6-6-6-6"/><path d="M8 6l-6 6 6 6"/><line x1="14.5" y1="16.5" x2="9.5" y2="7.5" opacity="0.4"/><line x1="3" y1="12" x2="21" y2="12" opacity="0.2"/></svg>`,
            gradientClass: "gradient-green",
            imagePlaceholder: "https://via.placeholder.com/400x192/16A34A/FFFFFF?text=Eng.+Software"
        },
        {
            id: "analise-desenvolvimento",
            nome: "Análise e Desenvolvimento de Sistemas",
            duracao: "2-3 anos",
            nivel: "Tecnólogo",
            foco: "Desenvolvimento Prático",
            descricao: "Curso prático e direto, focado no desenvolvimento de aplicações e sistemas.",
            iconSVG: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>`,
            gradientClass: "gradient-purple",
            imagePlaceholder: "https://via.placeholder.com/400x192/9333EA/FFFFFF?text=ADS"
        },
        {
            id: "sistemas-informacao",
            nome: "Sistemas de Informação",
            duracao: "4 anos",
            nivel: "Bacharelado",
            foco: "Negócios e TI",
            descricao: "Combina tecnologia com gestão empresarial e análise de negócios.",
            iconSVG: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
            gradientClass: "gradient-orange",
            imagePlaceholder: "https://via.placeholder.com/400x192/EA580C/FFFFFF?text=SI"
        },
        {
            id: "engenharia-computacao",
            nome: "Engenharia da Computação",
            duracao: "5 anos",
            nivel: "Bacharelado",
            foco: "Hardware e Software",
            descricao: "Integra conhecimentos de hardware, software e eletrônica.",
            iconSVG: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/></svg>`,
            gradientClass: "gradient-red",
            imagePlaceholder: "https://via.placeholder.com/400x192/DC2626/FFFFFF?text=Eng.+Comp."
        },
        {
            id: "redes-computadores",
            nome: "Redes de Computadores",
            duracao: "2-3 anos",
            nivel: "Tecnólogo",
            foco: "Infraestrutura",
            descricao: "Especializado em redes, segurança e infraestrutura de TI.",
            iconSVG: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
            gradientClass: "gradient-cyan",
            imagePlaceholder: "https://via.placeholder.com/400x192/0891B2/FFFFFF?text=Redes"
        },
    ];

    const carouselContent = document.querySelector('.carousel-content');
    const prevButton = document.getElementById('carouselPrev');
    const nextButton = document.getElementById('carouselNext');

    let carouselItemsElements = []; // Renomeado para evitar conflito com 'items' da função
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
                                    ${curso.iconSVG}
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
                            <a href="/curso/${curso.id}" class="card-button-link">
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
            // Se todos os itens cabem na visualização (ou menos)
            transformValue = 0;
        } else if (currentIndex >= (totalItems - itemsPerView)) {
            // Se estamos na última "página" de itens
            // Calcula o deslocamento exato para alinhar o final do conteúdo
            const carouselContainer = carouselContent.parentElement; // o .carousel
            const scrollableWidth = carouselContent.scrollWidth;   // Largura total de todos os itens
            const viewportWidth = carouselContainer.clientWidth;   // Largura visível do carrossel

            const maxTranslateX = scrollableWidth - viewportWidth;
            transformValue = -Math.max(0, maxTranslateX); // Garante que não seja positivo
        } else {
            // Navegação normal para páginas intermediárias
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
            // O botão "next" é desabilitado se currentIndex atingiu o ponto
            // onde a próxima ação o levaria para a "última página" ou já está nela.
            // A lógica em applyCarouselTransform já cuida do alinhamento exato.
            nextButton.disabled = currentIndex >= (totalItems - itemsPerView);
        }
    }

    function initializeCarousel() {
        carouselItemsElements = carouselContent.querySelectorAll('.carousel-item');
        totalItems = carouselItemsElements.length;

        if (totalItems === 0) {
            itemWidth = 0;
            itemsPerView = 1; // Valor padrão
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

            // Ajusta o currentIndex se ele se tornou inválido devido à mudança de itemsPerView
            // Esta linha garante que, mesmo se currentIndex for muito alto, a lógica
            // em applyCarouselTransform para a última página será acionada corretamente.
            // Não é estritamente necessário "clampar" aqui se applyCarouselTransform já lida com isso.
            // currentIndex = Math.max(0, Math.min(currentIndex, totalItems - itemsPerView));
        }
        applyCarouselTransform(); // Aplica a transformação inicial/ajustada
        updateButtonStates();     // Define o estado inicial dos botões
    }


    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            applyCarouselTransform();
            updateButtonStates();
        }
    });

    nextButton.addEventListener('click', () => {
        // Permite avançar até que currentIndex seja tal que a próxima exibição
        // seja a dos últimos itemsPerView itens.
        if (currentIndex < (totalItems - itemsPerView)) {
            currentIndex++;
            applyCarouselTransform();
            updateButtonStates();
        }
    });

    window.addEventListener('resize', () => {
        initializeCarousel(); // Re-calcula tudo em caso de redimensionamento
    });

    // Gerar os cards dos cursos
    cursos.forEach(curso => {
        carouselContent.innerHTML += createCursoCard(curso);
    });

    // Inicializar o carrossel após os cards serem adicionados ao DOM
    initializeCarousel();
});