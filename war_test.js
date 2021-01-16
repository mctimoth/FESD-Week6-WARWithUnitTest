//war_test.js
var expect = chai.expect;

describe("MyFunctions", function() {
    describe("buildDeck", function() {
        it("should create a card deck", function() {
            testDeck = new CardDeck; //follow the process that is used in the main .js
            testDeck.buildDeck();    //to get to the point of test
            expect(testDeck.cards.length).to.equal(52);
        });
        it("should create each card as an instance of Card", function() {
            testDeck = new CardDeck;
            testDeck.buildDeck();
            expect(testDeck.cards[51]).to.be.an.instanceOf(Card);
        });
        it("should throw an error if card deck is not created", function() {
            expect(function() {
                testDeck = new CardDeck;
                testDeck.buildDeck();
                expect(testDeck.cards.length).to.equal(0);
            }).to.throw(Error);
        });
    });
    describe("addPlayer", function() {
        it("should create a new Player in Game.players[]", function() {
            testGame = new Game;
            testGame.addPlayer("testPlayer1");
            expect(testGame.players[0].firstName).to.equal("testPlayer1");
        });
        it("should throw and error if testGame.players[1].name is undefined or null", function() {
            expect(function() {
                testGame = new Game;
                testGame.addPlayer("testPlayer");
                expect(testGame.players[1].name).to.equal("undefined");
            }).to.throw(Error);
        })
    })
    describe("dealCards", function() {
        it(`should populate 26 cards into Game.players[0] (&[1]) .handcards`, function() {
            testDeck = new CardDeck;
            testDeck.buildDeck();
            testDeck.shuffleDeck();
            testGame = new Game("War");
            testGame.addPlayer("testPlayer1");
            testGame.addPlayer("testPlayer2");
            testGame.dealCards();
            expect(testGame.players[0].handCards.length).to.equal(26);
            expect(testGame.players[1].handCards.length).to.equal(26);
        });
        it(`should throw and error if cards have not been dealt
             from the deck to the player's hand`, function() {
            expect(function() {
                testDeck = new CardDeck;
                testDeck.buildDeck();
                testDeck.shuffleDeck();
                testGame = new Game("War");
                testGame.addPlayer("testPlayer1");
                testGame.addPlayer("testPlayer2");
                testGame.dealCards();
                expect(testGame.players[0].handCards.length).to.equal(0);
                expect(testGame.players[1].handCards.length).to.equal(0);
            }).to.throw(Error);
        })
    })
});