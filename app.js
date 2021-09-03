
let playerCards = []
let playerSums = 0
let playerMessage = ""

let dealerCards = []
let dealerSums = 0
let dealerMessage = ""

let CardsIcon = ["♠️", "♥️", "♣️", "♦️"]

let messageEl = document.getElementById('message-el')
let cardEl = document.getElementById('cards-el')
let sumEl = document.getElementById('sum-el')
let messageElDealer = document.getElementById('message-el-dealer')
let cardElDealer = document.getElementById('cards-el-dealer')
let sumElDealer = document.getElementById('sum-el-dealer')
let startBtn = document.getElementById('start-btn')

playerIsAlive = false
playerHasBlackjack = false

dealerIsAlive = false
dealerHasBlackjack = false

// Start Game
function startGame(){
    isAlive = true
    // Player
    let firstCardPlayer = getRandomCard()
    let firstCardIconPlayer = getRandomIcons()
    let secondCardPlayer = getRandomCard()
    let secondCardIconPlayer = getRandomIcons()
    // Dealer
    let firstCardDealer = getRandomCard()
    let firstCardIconDealer = getRandomIcons()
    let secondCardDealer = getRandomCard()
    let secondCardIconDealer = getRandomIcons()
    playerCards = [firstCardIconPlayer, firstCardPlayer, secondCardIconPlayer, secondCardPlayer]
    playerSums = firstCardPlayer + secondCardPlayer
    dealerCards = [firstCardIconDealer, firstCardDealer, secondCardIconDealer, secondCardDealer]
    dealerSums = firstCardDealer + secondCardDealer
    renderGame()
}


function renderGame(){
    // Player's cards
    cardEl.textContent = "CARDS: "
    for( let i = 0, n = playerCards.length; i < n; i++){
        cardEl.textContent += playerCards[i] + " "
    }

    // Dealer's cards
    cardElDealer.textContent = "CARDS: "
    for( let i = 0, m = dealerCards.length; i < m; i++){
        cardElDealer.textContent += dealerCards[i] + " "
    }

    // Player's sum
    sumEl.textContent = "SUMS: " + playerSums
    if(playerSums <= 20){
        playerMessage = "Do you want to draw a new card?"
        playerIsAlive = true
    } else if(playerSums === 21){
        playerMessage = "You've got a Blackjack!"
        playerHasBlackjack = true
    } else {
        playerMessage = "Bust!"
        playerIsAlive = false
    }
    messageEl.textContent = playerMessage

    // Dealer's sum
    sumElDealer.textContent = "SUMS: " + dealerSums
    if(dealerSums <= 16){
        dealerMessage = "Dealer's"
        dealerIsAlive = true
    } else if(dealerSums >= 17 && dealerSums <= 20){
        dealerMessage = "Dealer has stood"
        dealerIsAlive = true
    } else if(dealerSums === 21){
        dealerMessage = "Dealer got a Blackjack!"
        dealerHasBlackjack = true
    } else {
        dealerMessage = "Dealer is out of the game!"
        dealerIsAlive = false
    }
    messageElDealer.textContent = dealerMessage
    startBtn.textContent = "RESET GAME"
}

// Player
function newCard(){
    if(playerIsAlive === true && playerHasBlackjack === false){
        let playerExtraCard = getRandomCard()
        let playerExtraCardIcon = getRandomIcons()
        playerSums += playerExtraCard
        playerCards.push(playerExtraCardIcon)
        playerCards.push(playerExtraCard)
        renderGame()
    }

}

// Dealer
function pass(){
    if(dealerSums <= 16){
        let dealerExtraCard = getRandomCard()
        let dealerExtraCardIcon = getRandomIcons()
        dealerSums += dealerExtraCard
        dealerCards.push(dealerExtraCardIcon)
        dealerCards.push(dealerExtraCard)
        renderGame()
    }
}

// Get Random Card
function getRandomCard() {
    let randomNumber = Math.floor(((Math.random() * 13) + 1))
    if(randomNumber > 10){
        return 10
    } else if(randomNumber === 1){
        return 11
    } else {
        return randomNumber
    }
}


// Get Random Card's icon
function getRandomIcons() {
    let randomIconsIndex = Math.floor(Math.random() * 4)
    return CardsIcon[randomIconsIndex]
}