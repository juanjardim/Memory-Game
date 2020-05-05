import createGrid from './display.js'

const numberOfCards = 12;
const cardContainerId = 'cardContainer';
let lastElementSelected = null;
let isBlock = false;

function flipCard(event) {
    if(isBlock) {
        return;
    }
    let targetElement = event.currentTarget;           

    if(targetElement.classList.contains('valid')) {
        return;
    }

    if(lastElementSelected === null) {
        targetElement.classList.remove('question');
        lastElementSelected = targetElement;
        return;
    }

    if(targetElement.getAttribute('data-index') == lastElementSelected.getAttribute('data-index')) {
        targetElement.classList.add('question');
        lastElementSelected = null;
        return;
    }
    
    targetElement.classList.remove('question');

    let elementContent = targetElement.querySelector('.fas');
    let lastElementSelectedContent = lastElementSelected.querySelector('.fas');
    if(lastElementSelectedContent.classList.value != elementContent.classList.value) {
        isBlock = true;
        setTimeout(() =>{
            lastElementSelected.classList.add('question');
            targetElement.classList.add('question');
            lastElementSelected = null;
            isBlock = false;
        },500);
    } else {
        lastElementSelected.classList.add('valid');
        targetElement.classList.add('valid');
        lastElementSelected = null;
    }
}

function bindOnClickCard() {
    let cards = document.querySelectorAll('.memory-card');
    for(let card of cards) {
        card.addEventListener('click', flipCard);
    }
}

(() => {
    document.querySelector('#startGameBtn').addEventListener('click', () => {
        lastElementSelected = null;
        createGrid(numberOfCards, cardContainerId);
        bindOnClickCard();
    });
})()