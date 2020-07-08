const chai = require("chai");
const expect = chai.expect;
const Users = require("../src/users")

describe ("Users"), function() {
  beforeEach(function () {
    //Describe variables used in test here!
    const user = new Users();
      // let deck, round, game;
      //     beforeEach(function () {
        //       game = new Game();
        //       cards = game.createCards()
        //       deck = new Deck(cards)
        //       round = new Round(deck)
        //     });
  });

  it ("should be a function", function() {
    expect (Users).to.be.a("function");
  });
}
