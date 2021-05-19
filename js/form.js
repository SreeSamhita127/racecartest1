class Form{
    constructor(){
this.input = createInput('').attribute("placeholder","Enter your name");
this.button = createButton('Click To Play');
this.title = createElement('H1');
this.greeting = createElement('H1');
this.reset = createButton('Reset'); 
    }

  display(){
      
      this.input.position(innerWidth-1100,250);
      this.button.position(innerWidth-1250,250);
      this.title.position((innerWidth-500)/2,100);  
      this.reset.position(innerWidth-250,20)
      this.title.html("Racecar Racing");
      this.button.style("font-family","harrington")
      this.button.size(90,30);
      this.button.style("background-color","lightblue")
      this.title.style("font-family","Bahnschrift Condensed");
      this.title.style("font-size","40px");
      this.title.style("text-decoration","underline");
      this.input.size(190,25);
      this.greeting.style("font-family","Bradley Hand ITC")

// arrow function
      this.button.mousePressed(()=>{
          this.input.hide();
          this.button.hide();
          player.name = this.input.value();
          playerCount+=1;
          player.index = playerCount
          this.greeting.html("Welcome " + player.name);
          this.greeting.position((innerWidth-500)/2,250);
          player.Update();
          player.updateCount(playerCount);
     })

     this.reset.mousePressed(()=>{
         game.updateState(0);
         player.updateCount(0);
         database.ref('players').set('');
         game.Start();
         this.greeting.hide();
         
     })
  }  
        

  hide(){
      this.input.hide();
      this.button.hide();
      this.greeting.hide();
      this.title.hide();
  }
}
