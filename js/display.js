
const availableIcons = ['tree', 'map-signs', 'route', 'toilet-paper', 'binoculars', 'fire', 'frog', 'hiking', 'faucet', 'caravan'];
const numberOfCardPerRow = 4;
function createCard(index) {
    let card = document.createElement('div');
    card.setAttribute('class', 'col-5 col-sm-6 col-md-4 col-lg-3 memory-card question');
    card.setAttribute('data-index', `00-${index}`);
    return card;
}
function createRow(){
    let row = document.createElement('div');
    row.setAttribute('class', 'row justify-content-between');
    return row;
}

function createRandomArray(arrayItems, maxNumber, availableIconsCount){
    if(arrayItems.length == maxNumber){
        return arrayItems;
    }

    let index = Math.floor(Math.random() * availableIconsCount + 1);

    if(arrayItems.indexOf(index) < 0){
        arrayItems.push(index);
    }

    return createRandomArray(arrayItems, maxNumber, availableIconsCount);
}


function shuffleCards(numberOfCards) {
    let cards = [];
    let half = numberOfCards / 2;

    let randomItems = createRandomArray([], half, availableIcons.length - 1);

    
    for(let i = 0; i < half; i++) {
        let index = randomItems[i];
        cards.push(availableIcons[index]);
        cards.push(availableIcons[index]);
    }

    return cards.sort(() => Math.random() - 0.5);;
    
}

function setCardContent(numberOfCards) {
    let cardContent = shuffleCards(numberOfCards);
    var cards = document.querySelectorAll('.memory-card');

    let i = 0;
    for(let card of cards) {
        let content = document.createElement('i');
        content.setAttribute('class', `fas fa-${cardContent[i]}`);
        i++;
        card.appendChild(content);
    }

}

function createGrid(numberOfCards, containerId){
    if(numberOfCards % numberOfCardPerRow !== 0)
        throw 'Invalid number of cards';

    const container = document.querySelector(`#${containerId}`);
    container.innerHTML = '';
    let row = createRow();
    
    for(let i = 0; i < numberOfCards; i++) {
        row.appendChild(createCard(i));
    }

    container.appendChild(row);
    setCardContent(numberOfCards);    
}

export {createGrid as default};