// content
let name = document.querySelectorAll('.slider__text')
let price = document.querySelectorAll('.slider__author')


fetch('https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline')
    .then(data => data.json())
    .then(element => {
        const res = element.filter(function(e) {
            return e.price < 5;
          });
        for (i = 0; i < res.length; i++) {
                name[i].textContent = res[i].name
                price[i].textContent = `— ${res[i].price}`
        };
    });

// drop button
function dropMenu() {
    document.querySelector("#myDropdown").classList.toggle("show");
    document.querySelector("#myDropdownMenu").classList.toggle("show");

}
    
window.onclick = function(event) {
    if (!event.target.matches('.btn')) {
        const dropdowns = document.querySelectorAll(".dropdown__content");
        let i;
        for (i = 0; i < dropdowns.length; i++) {
          const openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
            }
        }
    }
}

// Slider
let slideIndex = 1;
showSlides(slideIndex);

function plusSlide() {
    showSlides(slideIndex += 1);
}

function minusSlide() {
    showSlides(slideIndex -= 1);  
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;

    const prev = document.querySelector(".slider__prev");
    const next = document.querySelector(".slider__next");

    const slides = document.querySelectorAll(".slider__item");
    const dots = document.querySelectorAll(".slider__dots-item");

    if (n >= slides.length) {
        next.style.display = "none";
    } else {
        next.style.display = "block";
    }

    if (n <= 1) {
        prev.style.display = "none";
    } else {
        prev.style.display = "block";
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "flex";
    dots[slideIndex - 1].className += " active";
}
