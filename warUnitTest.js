//warUnitTest.js for FESD Javascript Week6 - Final Profect - The Card Game WAR
//By:  Tim Gibney - FESD 11/2020

// For the final project you will be creating an automated version of the classic card game WAR.
// Think about how you would build this project and write your plan down. Consider classes such as Card, Deck, and Player and what fields and methods they might each have. You can implement the game however you’d like (i.e. printing to the console, using alert, or some other way). The completed project should, when ran, do the following:
// -	Deal 26 Cards to two Players from a Deck. 
// -	Iterate through the turns where each Player plays a Card
// -	The Player who played the higher card is awarded a point
// -	Ties result in zero points for either Player
// -	After all cards have been played, display the score.
// Write Unit Tests using Mocha and Chai for each of the functions you write.

class Card {
    constructor(value,suit){
        this.value = value;
        this.suit = suit;
    }
    listCard(){
        console.log(`The card is ${this.value}${this.suit}`);
    }
}

//A container class for card objects
class CardDeck {
    constructor(cardCount){
        this.cardCount = cardCount
        this.cards = [];
    }
    buildDeck(){
        for(var i = 0;i < 13;i++){
            this.cards[i] = new Card(i + 1,"H");
            this.cards[i + 13]= new Card(i + 1,"S");
            this.cards[i + 26]= new Card(i + 1,"D");
            this.cards[i + 39]= new Card(i + 1,"C");
        }
    }
    //shuffleDeck takes the cards array and shuffles it using the Durstenfeld Shuffle algorithm
    //which acts upon the array passed and changes/shuffles the array/deck in-place
    shuffleDeck(){
        for (let i = this.cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
        }
    }
    listDeck(){
        console.log(this.cards);
    }
}

class Player {
    constructor(firstName) {
        this.firstName = firstName;
        this.handCards = [];
        this.wonCards = [];
        this.score = 0;
    }
    listPlayerCards(){
        console.log(this.handCards);
    }
}

class Game {
    constructor(name,cardCount){
        this.cardGameName = name;
        this.cardCount = cardCount;
        this.numberOfPlayers = 2;
        this.numberOfCardsDealt = 26;
        this.tableCards = [];
        this.rounds = 0;
        this.players = [];
    }

    addPlayer(player1,player2){
        this.players[0] = new Player(player1);
        this.players[1] = new Player(player2);
    }
    //dealCards uses .pop to take the last card from the deck array and uses .push to place that card
    //into the players hand array at the first element for the first hand or the last element for each
    //successive hand
    dealCards(){
        for (let i = 0;i < this.numberOfCardsDealt;i++){
            this.players[0].handCards.push(theDeck.cards.pop());
            this.players[1].handCards.push(theDeck.cards.pop());
        }
    }
    //playHand takes a players handcards array and .pops that array's last card on the tableCards array
    //in preparation for analysis/scoring/handedness
    playHand(player){
        this.tableCards.push(player.handCards.pop());
    }
    //winnerTakesTheCards takes the two cards played into tableCards and .pops them from tableCards
    //stack and pushes them into the winning player's hand
    winnerTakesTheCards(winner){
        if(winner == 1){
            this.players[0].wonCards.push(this.tableCards.pop());
            this.players[0].wonCards.push(this.tableCards.pop());
        }else if(winner == 2){
            this.players[1].wonCards.push(this.tableCards.pop());
            this.players[1].wonCards.push(this.tableCards.pop());
        }else if(winner == "tie"){
            this.tableCards.pop();
            this.tableCards.pop();
        }    
    }
    displayScore(){    
        console.log(
            `
            ${this.players[0].firstName} has ${this.players[0].score} points.
            ${this.players[1].firstName} has ${this.players[1].score} points.
            `
        );
    }
    playGame(){
        while(this.players[0].handCards.length != 0 && this.players[1].handCards.length != 0){
            this.playHand(this.players[0]);
            this.playHand(this.players[1]);
            this.rounds += 1;
            if(this.tableCards[0].value > this.tableCards[1].value){
                this.players[0].score += 1;
                this.winnerTakesTheCards(1);
            }else if(this.tableCards[0].value < this.tableCards[1].value){
                this.players[1].score += 1;
                this.winnerTakesTheCards(2);
            }else{
                this.winnerTakesTheCards("tie");
            }
        }//end while loop
        this.displayScore();
    }//end playGame method
}

theDeck = new CardDeck(52);
theDeck.buildDeck();
theDeck.shuffleDeck();
War = new Game("War",52);
War.addPlayer("Player1","Player2");
War.dealCards();
War.playGame();