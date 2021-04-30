


 ////     mam i tried my best but idont know how to make bounce the ball from block.









var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload(){
    //music=loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    block1 = createSprite(0,580,360,30);
    block1.shapeColor = "blue";

    block2 = createSprite(295,580,200,30);
    block2.shapeColor = "orange";

    //create two more blocks i.e. block3 and block4 here

    block3 = createSprite(510,580,200,30);
    block3.shapeColor = "yellow";

    block4 = createSprite(725,580,200,30);
    block4.shapeColor = "red";

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = rgb(255,255,255);
    ball.velocityX=3;
    ball.velocityY=4;
    //write code to add velocityX and velocityY

}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    ball.bounceOff(edges);

    
    //write code to bounce off ball from the block1 
    if(block1.isTouching(ball) && ball.bounceoff(block1)){
        ball.shapeColor = "blue";
        //music.play();
    }



    if(block2.isTouching(ball)){
        ball.shapeColor = "orange";
        ball.velocityX=0;
        ball.velocityY=0;
        //write code to set velocityX and velocityY of ball as 0

        //write code to stop music
        
    }

    //write code to bounce off ball from the block3
    if(block3.isTouching(ball)  ){
        ball.shapeColor="yellow";
    }

    //write code to bounce off ball from the block4
    if(block4.isTouching(ball) ) {
        ball.shapeColor="red";
    }
       

    bounceoff(block1,ball);

    drawSprites();
}

function bounceoff(block1,ball){

    if(block1.x-ball.x<block1.width/2+block1.width/2 &&
        ball.x-block1.x<block1.width/2+ball.width/2 ){

            block1.velocityX=block1.velocityX*(-1) ;
            ball.velocityX=ball.velocityX*(-1) ;

        }
        if(block1.y-ball.y<block1.height/2+block1.height/2 &&
            ball.y-block1.y<block1.height/2+ball.height/2){
                 
                block1.velocityY=block1.velocityY*(-1);
                ball.velocityY=ball.velocityY*(-1);
        }


//    if(block3.x-block3.x<block3.width/2+block3.width/2 &&
 //        block3.x-block3.x<block3.width/2+block3.width/2 ){
    
 //               block3.velocityX=block3.velocityX*(-1) ;
  //                    block3.velocityX=block3.velocityX*(-1) ;
    
  //          }
 //           if(block3.y-block3.y<block3.height/2+block3.height/2 &&
 //               block3.y-block1.y<block3.height/2+block3.height/2){
 //                    
 //                   block3.velocityY=block3.velocityY*(-1);
//                          block3.velocityY=block3.velocityY*(-1);
 //           }
    
 //   if(block4.x-block4.x<block4.width/2+block4.width/2 &&
 //        block4.x-block1.x<block4.width/2+block4.width/2 ){
        
  //               block4.velocityX=block4.velocityX*(-1) ;
   //                    block4.velocityX=block4.velocityX*(-1) ;
        
  //              }
//             if(block4.y-block4.y<block4.height/2+block.height/2 &&
 //                   block4.y-block1.y<block4.height/2+block4.height/2){
                         
 //                       block4.velocityY=block4.velocityY*(-1);
 //                             block4.velocityY=block4.velocityY*(-1);
 //               }

}
