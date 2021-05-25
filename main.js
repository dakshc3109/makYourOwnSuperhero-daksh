var canvas = new fabric.Canvas("myCanvas");

var heightOfBlock = 30;
var widthOfBlock = 30;

playerX = 10;
playery = 10;

objectPlayer = "";
objectBlock = "";

function player_update(){
    fabric.Image.fromURL("player.png", function(Img){
        objectPlayer = Img;

        objectPlayer.scaleToWidth(150);
        objectPlayer.scaleToHeight(140);
        objectPlayer.set({
            top: playery,
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
            top: playery, 
            left: playerX
        });

        canvas.add(objectBlock);
    });
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e){
    var keyPressed = e.keyCode;
    console.log(keyPressed);
    if(e.shiftKey == true && keyPressed == '80'){
        console.log("p and shift pressed together");
        widthOfBlock = widthOfBlock+10;
        heightOfBlock = heightOfBlock+10;
        document.getElementById("current_width").innerHTML = widthOfBlock;
        document.getElementById("current_height").innerHTML = heightOfBlock;
    }

    if(e.shiftKey == true && keyPressed == '77'){
        console.log("m and shift pressed together");
        widthOfBlock = widthOfBlock-10;
        heightOfBlock = heightOfBlock-10;
        document.getElementById("current_width").innerHTML = widthOfBlock;
        document.getElementById("current_height").innerHTML = heightOfBlock;
    }

    if(keyPressed == '38'){
        console.log("up");
        up();
    }

    if(keyPressed == '40'){
        console.log("down");
        down();
    }

    if(keyPressed == '37'){
        console.log("left");
        left();
    }

    if(keyPressed == '39'){
        console.log("right");
        right();
    }

    if(keyPressed == '70'){
        new_image('ironman_face.png')
        console.log("f");
    }

    if(keyPressed == '66'){
        new_image('spiderman_body.png')
        console.log("b");
    }

    if(keyPressed == '76'){
        new_image('hulk_legs.png')
        console.log("l");
    }

    if(keyPressed == '82'){
        new_image('thor_right_hand.png')
        console.log("r");
    }

    if(keyPressed == '72'){
        new_image('captain_america_left_hand.png')
        console.log("h");
    }
}