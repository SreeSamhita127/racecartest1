class Game{
    constructor(){
        
    }

getState(){
 var getstateref = database.ref('gameState');
 getstateref.on("value",function(data){
     gameState = data.val();
 })
}   

updateState(state){
    database.ref('/').update({
        gameState: state
    })
}

Start(){
  if(gameState === 0){
      player = new Player();
      player.getCount();

      form = new Form();
      form.display();
  }
  car1 = createSprite(400,500,100,100);
  car1.addImage(carimg1);
  car2 = createSprite(700,500,100,100);
  car2.addImage(carimg2);
  car3 = createSprite(1000,500,100,100);
  car3.addImage(carimg3);
  car4 = createSprite(1300,500,100,100);
  car4.addImage(carimg4);
  cars = [car1,car2,car3,car4];
  referee = false;
}

play(){
    form.hide();

    textSize(20);
    text("game has begun",150,50);

    Player.GetPlayedInfo();
    
    image(track1,0,-windowHeight*4,windowWidth,windowHeight*5);
    image(ground,0,windowHeight,windowWidth,600);

    if(allPlayers !== undefined){
        var x = 240;
        var y;
        var index = 0;
        for(var plr in allPlayers){
            index = index + 1;  
            x = x+300
            y = displayHeight - allPlayers[plr].distance
            cars[index-1].x = x;
            cars[index-1].y = y;
          
            //ball.x = x; 
            if(index === player.index){
                camera.position.x = displayWidth/2;
                camera.position.y = cars[index-1].y; 
                fill("yellow")
                ellipse(x,y,60,80);
                text(player.name,x-60,y-60);
                
            }
            

        }
        if(keyIsDown(UP_ARROW) && player.index !== null){
           // carVroom.play();
            player.distance = player.distance + 20
            player.Update();
        } 
        if(keyWentUp(UP_ARROW)){
            carVroom.stop();
        }       
        if(keyIsDown(LEFT_ARROW)){
            cars[index-1].x -= 10
            player.Update();
        }
        if(keyIsDown(RIGHT_ARROW)){
            cars[index-1].x += 10
            player.Update();
        }
    }
    drawSprites();
    if(player.distance > 4500 && referee === false){
      //  gameState = 2;
        player.rank = player.rank + 1;
        Player.updateRank(player.rank);
        player.Update();
        referee = true;
    }
} // end of play

end(){
}
displayRanks(){
    imageMode(CENTER);
    background("white");
    camera.position.x = 0;
    camera.position.y = 0;
    textSize(25);
    fill("black");
    textFont("jokerman");
    textAlign(CENTER);
    image(silver, displayWidth/-4,displayHeight/9 - 100,200,200);
    image(gold, 0,-100,250,250);
    image(bronze, displayWidth/4,displayHeight/10 - 100,150,150);
    Player.GetPlayedInfo();
    for(var plr in allPlayers){
        if(allPlayers[plr].rank === 1){
            text("First :" + allPlayers[plr].name,0,-50);
        }
        else if(allPlayers[plr].rank === 2){
            text("Second :" + allPlayers[plr].name,displayWidth/4,displayHeight/9 + 70);
        }
        else if(allPlayers[plr].rank === 3){
            text("Third :" + allPlayers[plr].name,displayWidth/-4,displayHeight/10 + 70);
        }
        else{
            text("Fourth:" + allPlayers[plr].name,0,100);
        }
        
    }
}
}// end of class