document.addEventListener('DOMContentLoaded', function () {

    // Code for form
    const formControl = document.querySelectorAll('.form-control');

    formControl.forEach(function (input) {
        input.addEventListener('focus', function () {
            const label = this.nextElementSibling;
            label.classList.add('active');
        });

        input.addEventListener('blur', function () {
            const label = this.nextElementSibling;
            if (this.value !== '') {
                label.classList.add('active');
            } else {
                label.classList.remove('active');
            }
        });
    });

    // Code for slider
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const dotsContainer = document.querySelector('.dots-container');
    let currentSlide = 0;
    const totalSlides = slides.length;

    for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        dot.addEventListener('click', () => showSlide(i));
        dotsContainer.appendChild(dot);
    }
    const dots = document.querySelectorAll('.dot');

    function updateDots() {
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSlide);
        });
    }

    function showSlide(index) {
        currentSlide = (index + totalSlides) % totalSlides;

        slider.style.transform = `translateX(-${currentSlide * 100}%)`;

        updateDots();
    }

    function nextSlide() {
        showSlide(currentSlide + 1);
    }

    function prevSlide() {
        showSlide(currentSlide - 1);
    }

    document.querySelector('.next-btn').addEventListener('click', nextSlide);
    document.querySelector('.prev-btn').addEventListener('click', prevSlide);

    let autoplayInterval = setInterval(nextSlide, 5000);

    document.querySelector('.slider-container').addEventListener('mouseenter', () => {
        clearInterval(autoplayInterval);
    });

    document.querySelector('.slider-container').addEventListener('mouseleave', () => {
        autoplayInterval = setInterval(nextSlide, 5000);
    });

    showSlide(currentSlide);


    // Code for hovering over tooltip
    const tooltipButton = document.getElementById('tooltip');
    const tooltipBox = document.getElementById('tooltip-box');

    tooltipButton.addEventListener('mouseover', function () {
        tooltipBox.classList.add('hover');
    });

    tooltipButton.addEventListener('mouseout', function () {
        tooltipBox.classList.remove('hover');
    });

    var modal = document.getElementById("myModal");
    var btn; 
    var closeBtn = modal.querySelector(".close");
    var modalVideo = document.getElementById("modalVideo");

    function playVideo() {
        modalVideo.play();
    }

    function pauseVideo() {
        modalVideo.pause();
    }

    function adjustButtons() {
        var screenWidth = window.innerWidth;

        var mobileButton = document.querySelector('.vid-mob-btn');
        var desktopButton = document.querySelector('.vid-col');

        if (screenWidth <= 768) {
            if (desktopButton) {
                desktopButton.remove();
            }
            btn = mobileButton.querySelector('#vid-play-btn');
        } else {
            if (mobileButton) {
                mobileButton.remove();
            }
            btn = desktopButton.querySelector('#vid-play-btn');
        }

        if (btn) {
            btn.addEventListener("click", function () {
                modal.style.display = "block";
                modalVideo.currentTime = 0; 
                playVideo(); 
                setTimeout(function () {
                    modal.querySelector(".modal-content").style.transform = "translateX(0)";
                }, 50); 
            });
        }
    }

    adjustButtons();

    window.addEventListener('resize', adjustButtons);

    closeBtn.addEventListener("click", function () {
        modal.querySelector(".modal-content").style.transform = "translateX(-100%)";
        setTimeout(function () {
            modal.style.display = "none";
            pauseVideo(); 
        }, 300); 
    });

    // Close modal if user clicks outside of it
    window.addEventListener("click", function (event) {
        if (event.target == modal) {
            modal.querySelector(".modal-content").style.transform = "translateX(-100%)";
            setTimeout(function () {
                modal.style.display = "none";
                pauseVideo(); 
            }, 300); 
        }
    });


    // Code for header menu

    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');

    menuToggle.addEventListener('click', () => {
        menu.classList.toggle('show');
    });




    
        setTimeout(function () {
            var preloader = document.getElementById("preloader");
            var content = document.getElementById("content");

            preloader.style.display = "none";

            content.style.display = "block";
        }, 2000);

});

