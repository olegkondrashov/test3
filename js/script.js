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