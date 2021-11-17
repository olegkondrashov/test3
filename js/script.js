// Dropdown menu

const dropdownBtn = document.querySelector('.dropdown'),
    dropdownMenu = document.querySelector('.dropdown__menu'),
    dropdownChevron = document.querySelector('.fa-chevron-down');



document.addEventListener('click', (e) => {
    if (e.target == dropdownBtn || e.target == dropdownChevron) {
        dropdownMenu.classList.toggle('show');
        dropdownChevron.classList.toggle('rotate');
    } else {
        dropdownMenu.classList.remove('show');
        dropdownChevron.classList.remove('rotate');
    }
});

// Slider 

const url = 'https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline&price_less_than=5';
fetch(url)
    .then((response) => response.json())
    .then((json) => appendData(json));

function appendData(json) {
    const mainContainer = document.querySelector(".slider__items");
    for (let i = 0; i < json.length; i++) {
        const sliderItem = document.createElement("div");
        sliderItem.classList.add("slider__item");
        const name = document.createElement("div");
        name.classList.add("slider__item_name");
        const price = document.createElement("div");
        price.classList.add("slider__item_price");
        name.innerHTML = json[i].name;
        price.innerHTML = '$ ' + json[i].price;
        mainContainer.appendChild(sliderItem);
        sliderItem.appendChild(name);
        sliderItem.appendChild(price);
    }
    const slider = document.querySelector('.slider'),
        sliderItem = document.querySelectorAll('.slider__item'),
        dots = document.querySelector('.slider__dots'),
        prev = document.querySelector('.slider__left'),
        next = document.querySelector('.slider__right');
    let slideIndex = 1;
    showSlides(slideIndex);
    showDots(slideIndex);
    currentSlide(slideIndex);

    function nextActive() {
        next.classList.add('active');
    }

    function showSlides(n) {
        if (n >= sliderItem.length) {
            next.classList.remove('active');
        } else nextActive();
        if (n <= 1) {
            prev.classList.remove('active');
            nextActive();
        } else prev.classList.add('active');

        if (n < 1) {
            slideIndex = sliderItem.length;
        }

        sliderItem.forEach(item => item.classList.remove('active'));

        if (sliderItem[slideIndex - 1]) {
            sliderItem[slideIndex - 1].classList.add('active');

        }
    }

    function showDots(n) {
        for (let i = 0; i < sliderItem.length; ++i) {
            const dot = document.createElement("div");
            dot.classList.add("slider__dots-item");
            dots.appendChild(dot);
            dot.addEventListener("click", dotClick.bind(null, i));
            dots.addEventListener('click', (e) => {
                if (e.target == dot) {
                    dot.classList.add("current")
                } else {
                    dot.classList.remove("current")
                }
            });
        };
    }

    function dotClick(num) {
        if (num == [slideIndex - 1]) {
            return false;
        };
        if (num > [slideIndex - 1]) {
            plusSlides(1);
        } else {
            plusSlides(-1);
        }
    }


    function currentSlide() {
        const allDots = dots.querySelectorAll(".slider__dots-item");
        if ([slideIndex !== -1]) {
            allDots.forEach((i) => {
                i.classList.remove("current")
            })
        }
        if ([slideIndex - 1]) {
            allDots[slideIndex - 1].classList.add("current");
        }
    }

    function plusSlides(n) {
        showSlides(slideIndex += n);
        currentSlide(n);
    }
    prev.addEventListener('click', () => {
        plusSlides(-1);
    });

    next.addEventListener('click', () => {
        plusSlides(1);
    });
}

// Hamburger 

const hamburger = document.querySelector('.hamburger'),
      nav = document.querySelector('.nav');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    nav.classList.toggle('show');
});