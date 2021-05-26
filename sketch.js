var database;
var back_img;
var gameState =0;
var playerCount = 0;
var allPlayers;
var score =0;
var player, form,game;
var player1,player2;
var players;
var fruits;
var fruitGroup;
var fruit1_img, fruit2_img, fruit3_img, fruit4_img, fruit5_img;
var player_img;
var player1score =0;
var player2score =0;

function preload(){
  back_img = loadImage("images/jungle.jpg");
  player_img = loadImage("images/basket2.png");
  fruit1_img = loadImage("images/apple2.png");
  fruit2_img = loadImage("images/banana2.png");
  fruit3_img = loadImage("images/melon2.png");
  fruit4_img = loadImage("images/orange2.png");
  fruit5_img = loadImage("images/pineapple2.png");
  fruitGroup = new Group();
}
function setup() {
  createCanvas(1000, 600);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  
}

function draw() {
  background(back_img);

  // Add conditions for gameStates and playerCount
  if (gameState === 1) {
    clear(); 
    game.play();
  }
  
  if (playerCount === 2) {
    game.update(1);
  }

}

function fruit1F(){
 var fruit1 = createSprite(Math.round(random(20,980)),0,  10, 10);
 fruit1.addImage(fruit1_img);
 fruit1.lifetime = 300;
 fruit1.velocityY = 9;
 fruit1.scale = 0.9;
 fruitGroup.add(fruit1);
}

function fruit2F(){
  var fruit2 = createSprite(Math.round(random(20,980)),0,  10, 10);
  fruit2.addImage(fruit2_img);
  fruit2.lifetime = 300;
  fruit2.velocityY = 10;
  fruit2.scale = 0.9;
  fruitGroup.add(fruit2);
 }

 function fruit3F(){
  var fruit3 = createSprite( Math.round(random(20,980)),0, 10, 10);
  fruit3.addImage(fruit3_img);
  fruit3.lifetime = 300;
  fruit3.velocityY = 11;
  fruit3.scale = 0.9;
  fruitGroup.add(fruit3);
 }

 function fruit4F(){
  var fruit4 = createSprite(Math.round(random(20,980)),0, 10, 10);
  fruit4.addImage(fruit4_img);
  fruit4.lifetime = 300;
  fruit4.velocityY = 8;
  fruit4.scale = 0.9;
  fruitGroup.add(fruit4);
 }

 function fruit5F(){
  var fruit5 = createSprite(Math.round(random(20,980)),0, 10, 10);
  fruit5.addImage(fruit4_img);
  fruit5.lifetime = 300;
  fruit5.velocityY = 12;
  fruit5.scale = 0.9;
  fruitGroup.add(fruit5);
 }