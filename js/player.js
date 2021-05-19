class Player{
    constructor(){
        this.distance = 0,
        this.index = null,
        this.name = null,
        this.rank = 0
    }

getCount(){
    var playerRef = database.ref('playerCount');
    playerRef.on("value",function(data){
        playerCount = data.val();
    });    
}
getRank(){
    var rankRef = database.ref('rank');
    rankRef.on("value",function(data){
        rankNum = data.val();
    }); 
}

updateCount(count){  // 1 
    database.ref('/').update({
        playerCount: count 
    })
}

static updateRank(rank){
        database.ref('/').update({
            rank: rank 
})
this.rank = this.rank + 1;
}

Update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
        name:this.name,
        distance: this.distance,
        rank: this.rank
    })
}

static GetPlayedInfo(){
    var playerinforef = database.ref('players');
    playerinforef.on("value",function(data){
        allPlayers = data.val();
    })
}
}