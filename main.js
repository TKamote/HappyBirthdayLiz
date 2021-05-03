const main = document.querySelector('.container');
const sub = document.querySelector('.wrapper');

main.addEventListener('click', () => {
    main.style.display = "none";
    sub.style.display = "flex";
})

