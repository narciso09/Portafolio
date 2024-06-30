window.onload = function() {
    showPopup();
};

function showPopup() {
    document.getElementById('popup').style.display = 'flex';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}
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
    
});


document.addEventListener('DOMContentLoaded', function() {
    const carousels = document.querySelectorAll('.commitment-carousel');

    carousels.forEach(carousel => {
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
});

document.addEventListener('DOMContentLoaded', function() {
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

    const carousel = document.querySelector('.carousel');
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
document.addEventListener('DOMContentLoaded', function() {
    const aboutContent = document.querySelector('.about-content');
    setTimeout(() => {
        aboutContent.classList.add('show');
    }, 500); // Retraso de 500 ms antes de mostrar el contenido
});

document.addEventListener('DOMContentLoaded', function () {
    // Función para animar los números
    const animarNumeros = (elemento, valorFinal, duracion) => {
      let contador = 0;
      let incremento = valorFinal / (duracion / 10);
      let intervalo = setInterval(() => {
        contador += incremento;
        if (contador >= valorFinal) {
          contador = valorFinal;
          clearInterval(intervalo);
        }
        elemento.textContent = Math.round(contador);
      }, 10);
    };
  
    // Función para animar el porcentaje circular
    const animarPorcentajeCircular = (elemento, valor) => {
      elemento.style.setProperty('--valor', valor);
      const spanPorcentaje = elemento.querySelector('.numero-porcentaje span');
      spanPorcentaje.textContent = valor + '%';
    };
  
    // Configuración del Intersection Observer
    const opcionesObserver = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2 // Cuando el 20% del elemento es visible
    };
  
    const estadisticasSection = document.querySelector('#estadisticas');
    const estadisticasNumeros = document.querySelectorAll('.numero');
    const porcentajeCircular = document.querySelector('.porcentaje-circular');
  
    const observer = new IntersectionObserver(function (entradas) {
      entradas.forEach(entrada => {
        if (entrada.isIntersecting) {
          // Si la sección de estadísticas está completamente visible
          estadisticasNumeros.forEach(numero => {
            let valorFinal = parseInt(numero.getAttribute('data-valor'));
            animarNumeros(numero, valorFinal, 2000);
          });
  
          let valorPorcentaje = parseInt(porcentajeCircular.getAttribute('data-valor'));
          animarPorcentajeCircular(porcentajeCircular, valorPorcentaje);
  
          // Desactivar el observer después de la animación para que no se repita
          observer.disconnect();
        }
      });
    }, opcionesObserver);
  
    // Observar la sección de estadísticas
    observer.observe(estadisticasSection);
  });
  
window.onload = function() {
    showPopup();
};

function showPopup() {
    document.getElementById('popup').style.display = 'flex';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

