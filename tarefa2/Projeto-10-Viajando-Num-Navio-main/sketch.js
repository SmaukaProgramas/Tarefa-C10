var sea,ship;
var seaImg,shipImg;

function preload(){
  seaImg = loadImage("sea.png");
  shipImg1 = loadAnimation("ship-1.png","ship-1.png",
                            "ship-2.png","ship-1.png");
}
//Acima são as animaçõaes e imagems do barco(animação)e do mar(imagem)
function setup(){
  createCanvas(400,400);
  background("blue");

  // Plano de fundo móvel
  sea=createSprite(400,200);
  sea.addImage(seaImg);
  sea.velocityX = -5;
  sea.scale=0.3;
// estes comandos tem a função de fazer com que a imagem do mar fique infinitamente na tela (indo, quando acaba ela volta ao início)
  
  ship = createSprite(130,200,30,30);
  ship.addAnimation("movingShip",shipImg1);
  ship.scale =0.25;
  // o comando acima tem a função de fazer com que o navio se mova para cima e para baixo dando impressão de movimento
}

function draw() {
  background(0);
  sea.velocityX = -3;

  
  //código para redefinir o plano de fundo
  if(sea.x < 0){
    sea.x = sea.width/8;
  }
    // este vai dar uma ajuda ao outro comando para que o mar retorne no seu ponto de início ao terminar a imagem.
  drawSprites();
}
