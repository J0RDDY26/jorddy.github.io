let header = document.getElementById('header')

let nubes = document.getElementById('nubes')
let montaña = document.getElementById('montaña')
let nubes2 = document.getElementById('nubes2')
let btn = document.getElementById('btn')
let viento = document.getElementById('viento')
let escalador = document.getElementById('escalador')
let slogan = document.getElementById('slogan')

window.addEventListener('scroll', function(){
    let value = window.scrollY;

    montaña.style.marginLeft = value *0.7 + 'px';
    nubes.style.left = value * -5 + 'px';
    nubes2.style.left = value * -5 + 'px';
    btn.style.marginTop = value * 0.7 +'px';
    slogan.style.marginBottom = value * -1 +'px';
    viento.style.left = value * -5 +'px';
    header.style.marginTop = value * 0.4 +'px';
    escalador.style.marginLeft = value * 4 +'px';
})

/*diseño responsivo*/

const navigation = document.querySelector('nav')
document.querySelector('.menu').onclick = function(){
    this.classList.toggle('active');
    navigation.classList.toggle('active');
}