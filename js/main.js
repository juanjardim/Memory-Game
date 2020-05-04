import createGrid from './display.js'

const numberOfCards = 12;
const cardContainerId = 'cardContainer';

(() => {
    document.querySelector('#startGameBtn').addEventListener('click', () => {
        createGrid(numberOfCards, cardContainerId);
    });

    document.querySelector('.memory-card').addEventListener('click', () => {
        console.log('clicked');
    })
})()