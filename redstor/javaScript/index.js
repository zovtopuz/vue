function scrollTo(element) {
    window.scroll({
        left: 0,
        top: element.offsetTop - 60,
        behavior: 'smooth'
    })
}

var button1 = document.querySelector('.scrollIntro');
var road1 = document.querySelector('#intro');

var button2 = document.querySelector('.scrollExperience');
var road2 = document.querySelector('#experience');

var button3 = document.querySelector('.scrollWorks');
var road3 = document.querySelector('#works');

var button4 = document.querySelector('.scrollAbout');
var road4 = document.querySelector('#biography');

var button5 = document.querySelector('.scrollContact');
var road5 = document.querySelector('#footer');

button1.addEventListener('click', () => {
    scrollTo(road1);
})
button2.addEventListener('click', () => {
    scrollTo(road2);
})
button3.addEventListener('click', () => {
    scrollTo(road3);
})
button4.addEventListener('click', () => {
    scrollTo(road4);
})
button5.addEventListener('click', () => {
    scrollTo(road5);
})