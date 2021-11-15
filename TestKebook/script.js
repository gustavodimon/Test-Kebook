const btnMenu = document.getElementById('btn-menu');

function toggleMenu(){
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
}   

btnMenu.addEventListener('click', toggleMenu);

const procurar = document.getElementById('searchbar');

function pesquisar(){
    const branco = document.getElementById('branco');
    branco.classList.toggle('active');
}   

procurar.addEventListener('click', pesquisar);