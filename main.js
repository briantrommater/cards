$(document).ready(function() {

});

let deckOfCards = ['2C', '2H', '2S', '2D', '3C', '3H', '3S', '3D', '4C', '4H', '4S', '4D',
'5C', '5H', '5S', '5D', '6C', '6H', '6S', '7C', '7H', '7S', '7D', '8C', '8H', '8S', '8D',
'9C', '9H', '9S', '9D', '10C', '10H', '10S', '10D', 'JC', 'JH', 'JS', 'JD', 'QC', 'QH',
'QS', 'QD', 'KC', 'KH', 'KS', 'KD', 'AC', 'AH', 'AS', 'AD'];

let diamonds = ['2D', '3D', '4D', '5D', '6D', '7D', '8D', '9D', '10D', 'JD', 'QD', 'KD', 'AD'];
let hearts = ['2H', '3H', '4H', '5H', '6H', '7H', '8H', '9H', '10H', 'JH', 'QH', 'KH', 'AH'];
let spades = ['2S', '3S', '4S', '5S', '6S', '7S', '8S', '9S', '10S', 'JS', 'QS', 'KS', 'AS'];
let clubs = ['2C', '3C', '4C', '5C', '6C', '7C', '8C', '9C', '10C', 'JC', 'QC', 'KC', 'AC'];

let halfDeckRed = ['2D', '3D', '4D', '5D', '6D', '7D', '8D', '9D', '10D', 'JD', 'QD', 'KD', 'AD','2H', '3H', '4H', '5H', '6H', '7H', '8H', '9H', '10H', 'JH', 'QH', 'KH', 'AH'];
let halfDeckBlack = ['2S', '3S', '4S', '5S', '6S', '7S', '8S', '9S', '10S', 'JS', 'QS', 'KS', 'AS', '2C','3C', '4C', '5C', '6C', '7C', '8C', '9C', '10C', 'JC', 'QC', 'KC', 'AC'];
let halfDeckDC = ['2D', '3D', '4D', '5D', '6D', '7D', '8D', '9D', '10D', 'JD', 'QD', 'KD', 'AD', '2C', '3C', '4C', '5C', '6C', '7C', '8C', '9C', '10C', 'JC', 'QC', 'KC', 'AC'];
let halfDeckSH = ['2S', '3S', '4S', '5S', '6S', '7S', '8S', '9S', '10S', 'JS', 'QS', 'KS', 'AS', '2H', '3H', '4H', '5H', '6H', '7H', '8H', '9H', '10H', 'JH', 'QH', 'KH', 'AH'];

let clonedCards = [];

let missingCard;



function quarter() {
    clonedCards = [...diamonds];
    removeCard()
    let theseDisappear = document.getElementsByClassName("start");
    for (let thing of theseDisappear) {
        thing.style.display = "none";
    }
}
function half() {
    clonedCards = [...halfDeckSH];
    removeCard()
    let theseDisappear = document.getElementsByClassName("start");
    for (let thing of theseDisappear) {
        thing.style.display = "none";
    }

}
function full() {
    clonedCards = [...deckOfCards];
    removeCard()
    let theseDisappear = document.getElementsByClassName("start");
    for (let thing of theseDisappear) {
        thing.style.display = "none";
    }

}

removeCard()

function removeCard() {
    //remove a random card
    let randomCardIdx = Math.floor(Math.random() * clonedCards.length);
    missingCard = clonedCards.splice(randomCardIdx, 1);
    //store card 
    console.log(missingCard.join());
    // shuffle the cards
    let shuffled = shuffle(clonedCards);

    // empty the carousel
    $('.carousel-inner').empty();

    //put new cards back in carousel
    for (let card of shuffled) {
        createCard(card)
    }

    // reinitialize carousel
    $('.carousel').carousel()
}

function shuffle(arr) {
    return arr.map(i => [Math.random(), i])
    .sort((a, b) => a[0] - b[0])
    .map(i => i[1])
}

function createCard(img_src) {
    let activeClass = '';

    if ($('.carousel-item').length === 0) {// are we creating the first card?
        activeClass = 'active';
    }

    let card = `<div class="carousel-item ${activeClass}">
        <img class="d-block w-100 shuffle" src="images/${img_src}.jpg" alt=" slide">
    </div>`

    $('.carousel-inner').append(card);
}

function noShowCarousel() {
    if ($('.carousel-item').length === 11) {
        $('.carousel').carousel('dispose');
        $('.carousel-inner').empty();
    }
}


$('.carousel').on('slid.bs.carousel', function (e) {
    let num_cards = $('.carousel-item').length
    if ( (num_cards - 1) === e.to) {
        $('.carousel-inner').empty();
        let fiftyTwoAppear = document.getElementsByClassName("containerA");
            for (let stuff of fiftyTwoAppear) {
            stuff.style.display = "block";
            }
    }
})


//
function guessCard(card) {
    console.log(card);
    if (missingCard == card) {
        document.querySelector("#mario").play();
    }
    else {
        console.log('lose')
        document.querySelector("#pacman").play();
    }
}










