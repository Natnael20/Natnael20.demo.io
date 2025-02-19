function openSearch() {
    document.getElementById("myOverlay").style.display = "block";
  }
  
  function closeSearch() {
    document.getElementById("myOverlay").style.display = "none";
  }


  function toggleCategory(element) {
    // Remove the active class from all category elements
    document.querySelectorAll('.new-products, .prices, .popular-products').forEach(function (el) {
        el.classList.remove('active-category');
    });

    // Add the active class to the clicked category element
    element.classList.add('active-category');
}

function scrollToTop() {
    // Smooth scrolling to the top of the page
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  function redirectToProduct() {
        window.location.href = 'product.html';
    }

    let countdownTime = new Date().getTime() + (40 * 24 * 60 * 60 * 1000); // 40 days in milliseconds


function updateCountdown() {
    let now = new Date().getTime();
    let timeLeft = countdownTime - now;

    if (timeLeft <= 0) {
        document.getElementById('hours').textContent = "00";
        document.getElementById('minutes').textContent = "00";
        document.getElementById('seconds').textContent = "00";
        clearInterval(countdownInterval);
        alert("Countdown Finished!");
        return;
    }

    let hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24).toString().padStart(2, '0');
    let minutes = Math.floor((timeLeft / (1000 * 60)) % 60).toString().padStart(2, '0');
    let seconds = Math.floor((timeLeft / 1000) % 60).toString().padStart(2, '0');

    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
}

// Update every second
let countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown(); // Run immediately


let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active', 'prev', 'next'));
    slides[index].classList.add('active');
    slides[(index + 1) % slides.length].classList.add('next');
    slides[(index - 1 + slides.length) % slides.length].classList.add('prev');
    
     // Highlight the active dot
    //dots.forEach(dot => dot.classList.remove('active-dot'));
    //dots[index].classList.add('active-dot');
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

function goToSlide(index) {
    currentSlide = index;
    showSlide(currentSlide);
}

showSlide(currentSlide);

// Auto advance to the next slide every 3 seconds
setInterval(nextSlide, 5000);



function toggleCategory(element) {
    // Remove the active class from all category elements
    document.querySelectorAll('.new-products, .prices, .popular-products').forEach(function (el) {
        el.classList.remove('active-category');
    });

    // Add the active class to the clicked category element
    element.classList.add('active-category');
}