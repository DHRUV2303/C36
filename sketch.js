var database;
var position;
var form, player, game;
var gameState=0, playerCount;

function setup(){
  database = firebase.database();
  game=new Game()
  game.getState()
  game.start()
  
}

function draw(){
  background("white");

  
    
}
