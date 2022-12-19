var FinishFlagImg;
var Player1Img, Player2Img;
var TrophyImg;
var FinsihFlag;
var Player1, Player2;
var Trophy;


function preload(){
    Player1Img = loadImage("Player 1.png")
    FinishFlagImg = loadImage("Finish Flag.png")
    Player2Img = loadImage ("Player 2 .jpeg")
    TrophyImg = loadImage ("Trophy.png")
}

function Setup(){
    createCanvas(400,400)
Player1 = createSprite(10,300,10,10);
Player2 = createSprite(10,310,10,10);
FinishFlag = createSprite(350,50,20,10);
Trophy = createSprite(200,200,15,15); 
Trophy.visible = false;

}

function Draw(){
    drawSprites();
}








