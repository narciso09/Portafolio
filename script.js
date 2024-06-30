document.addEventListener('DOMContentLoaded', function() {
    const carousels = document.querySelectorAll('.carousel');

    carousels.forEach(carousel => {
        let isPaused = false;
        const inner = carousel.querySelector('.carousel-inner');
        const items = inner.children;
        let index = 0;

        function showNextItem() {
            if (!isPaused) {
                index = (index + 1) % items.length;
                inner.style.transform = `translateX(-${index * 100}%)`;
            }
        }

        let interval = setInterval(showNextItem, 3000);

        carousel.addEventListener('mouseenter', () => {
            isPaused = true;
        });

        carousel.addEventListener('mouseleave', () => {
            isPaused = false;
        });
    });

    const commitmentCarousels = document.querySelectorAll('.commitment-carousel');

    commitmentCarousels.forEach(carousel => {
        const inner = carousel.querySelector('.carousel-inner');
        const items = inner.children;
        let index = 0;

        function showItem(newIndex) {
            if (newIndex >= items.length) {
                newIndex = 0;
            } else if (newIndex < 0) {
                newIndex = items.length - 1;
            }
            index = newIndex;
            inner.style.transform = `translateX(-${index * 100}%)`;
        }

        const prevButton = carousel.querySelector('.prev');
        const nextButton = carousel.querySelector('.next');

        prevButton.addEventListener('click', () => {
            showItem(index - 1);
        });

        nextButton.addEventListener('click', () => {
            showItem(index + 1);
        });
    });

    const commentForm = document.getElementById('comment-form');
    const carouselInner = document.querySelector('.carousel-inner');

    commentForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const comment = document.getElementById('comment').value;
        const name = document.getElementById('name').value;

        const newItem = document.createElement('div');
        newItem.classList.add('testimonial');

        newItem.innerHTML = `
            <p>"${comment}"</p>
            <h3>${name}</h3>
        `;

        carouselInner.appendChild(newItem);

        // Clear form fields
        document.getElementById('comment').value = '';
        document.getElementById('name').value = '';
    });

    const aboutContent = document.querySelector('.about-content');
    setTimeout(() => {
        aboutContent.classList.add('show');
    }, 500); // Retraso de 500 ms antes de mostrar el contenido

    // Función para animar los números
    const animateNumbers = (element, finalValue, duration) => {
        let counter = 0;
        const increment = finalValue / (duration / 10);
        const interval = setInterval(() => {
            counter += increment;
            if (counter >= finalValue) {
                counter = finalValue;
                clearInterval(interval);
            }
            element.textContent = Math.round(counter);
        }, 10);
    };

    // Función para animar el porcentaje circular
    const animateCircularPercentage = (element, value) => {
        element.style.setProperty('--value', value);
        const spanPercentage = element.querySelector('.numero-porcentaje span');
        spanPercentage.textContent = value + '%';
    };

    // Configuración del Intersection Observer
    const optionsObserver = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2 // Cuando el 20% del elemento es visible
    };

    const statisticsSection = document.querySelector('#statistics');
    const statisticsNumbers = document.querySelectorAll('.numero');
    const circularPercentage = document.querySelector('.porcentaje-circular');

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Si la sección de estadísticas está completamente visible
                statisticsNumbers.forEach(number => {
                    const finalValue = parseInt(number.getAttribute('data-value'));
                    animateNumbers(number, finalValue, 2000);
                });

                const percentageValue = parseInt(circularPercentage.getAttribute('data-value'));
                animateCircularPercentage(circularPercentage, percentageValue);

                // Desactivar el observer después de la animación para que no se repita
                observer.disconnect();
            }
        });
    }, optionsObserver);

    // Observar la sección de estadísticas
    observer.observe(statisticsSection);
});
