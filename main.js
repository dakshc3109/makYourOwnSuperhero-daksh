var canvas = new fabric.Canvas("myCanvas");

var heightOfBlock = 30;
var widthOfBlock = 30;

playerX = "10";
playery = "10";

objectPlayer = "";
objectBlock = "";

function player_update(){
    fabric.Image.fromURL("player.png", function(Img){
        objectPlayer = Img;

        objectPlayer.scaleToWidth(150);
        objectPlayer.scaleToHeight(140);
        objectPlayer.set({
            top: player_y,
            left: playerX
        });

        canvas.add(objectPlayer);
    });
}

function new_image(get_image){
    fabric.Image.fromURL(get_image, function(Img){
        objectBlock = Img;

        objectBlock.scaleToWidth(widthOfBlock);
        objectBlock.scaleToHeight(heightOfBlock);
        objectBlock.set({
            top: player_y, 
            left: player_x
        });

        canvas.add(objectBlock);
    });
}