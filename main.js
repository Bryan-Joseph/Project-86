var canvas = new fabric.Canvas("myCanvas");


var block = {
    width: 30,
    height: 30
}

var player = {
    x : 10 ,
    y : 10 ,
    width : 165 /3,
    height : 305 / 3
}

var playerImg = "";
var blockImg = "";

function playerUpdate() {
    fabric.Image.fromURL("player.png" , function (Img){
        playerImg = Img ;
        playerImg.scaleToWidth(player.width);
        playerImg.scaleToHeight(player.height);
        playerImg.set({
            top : player.y,
            left : player.x
        });

        canvas.add(playerImg);
    });
}

function blockUpdate(Imga) {
    fabric.Image.fromURL(Imga , function (Img){
        blockImg = Img ;
        blockImg.scaleToWidth(block.width);
        blockImg.scaleToHeight(block.height);
        blockImg.set({
            top : player.y,
            left : player.x
        });

        canvas.add(blockImg);
    });
}


