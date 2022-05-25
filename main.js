var canvas = new fabric.Canvas("my_canvas");
block_width = 30;
block_height = 30;
playerx = 20;
playery = 20;
object_player = "";
block_image = "";

function player_update() {
    fabric.Image.fromURL("player.png", updatePlayer_Image)
}

function updatePlayer_Image(Img) {
    object_player = Img;
    object_player.scaleToWidth(150);
    object_player.scaleToHeight(150);
    object_player.set({
        top: playerx,
        left: playery
    })
    canvas.add(object_player);
}

function new_image(get_image) {
    fabric.Image.fromURL(get_image, updateBlock_Image)
}

function updateBlock_Image(Img) {
    block_image = Img;
    block_image.scaleToWidth(block_width);
    block_image.scaleToHeight(block_height);
    block_image.set({
        top: playerx,
        left: playery
    })
    canvas.add(block_image);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);

    if (e.shiftKey == true && keyPressed == '80') {
        console.log("P and Shift increases the size of the block");
        block_width = block_width + 10;
        block_height = block_height + 10;
        document.getElementById("width").innerHTML = block_width;
        document.getElementById("height").innerHTML = block_height;
    }

    if (e.shiftKey == true && keyPressed == '77') {
        console.log("M and Shift decreases the size of the block");
        block_width = block_width - 10;
        block_height = block_height - 10;
        document.getElementById("width").innerHTML = block_width;
        document.getElementById("height").innerHTML = block_height;
    }

    // Directions

    if (keyPressed == '38') {
        up();
        console.log("up");
    }

    if (keyPressed == '40') {
        down();
        console.log("down");
    }

    if (keyPressed == '37') {
        left();
        console.log("left");
    }

    if (keyPressed == '39') {
        right();
        console.log("right");
    }

    // Image

    if (keyPressed == '65') {
        new_image('a.png')
        console.log("a");
    }

    if (keyPressed == '66') {
        new_image('b.png')
        console.log("b");
    }

    if (keyPressed == '67') {
        new_image('c.png')
        console.log("c");
    }

    if (keyPressed == '68') {
        new_image('d.png')
        console.log("d");
    }

    if (keyPressed == '69') {
        new_image('e.png')
        console.log("e");
    }

    if (keyPressed == '70') {
        new_image('f.png')
        console.log("f");
    }

    if (keyPressed == '71') {
        new_image('g.png')
        console.log("g");
    }

    if (keyPressed == '72') {
        new_image('h.png')
        console.log("h");
    }

    if (keyPressed == '73') {
        new_image('i.png')
        console.log("i");
    }

    if (keyPressed == '74') {
        new_image('j.png')
        console.log("j");
    }

    if (keyPressed == '75') {
        new_image('k.png')
        console.log("k");
    }

    if (keyPressed == '76') {
        new_image('l.png')
        console.log("l");
    }

    if (keyPressed == '84') {
        new_image('t.png')
        console.log("t");
    }

    if (keyPressed == '78') {
        new_image('n.png')
        console.log("n");
    }

    if (keyPressed == '79') {
        new_image('o.png')
        console.log("o");
    }

    if (keyPressed == '88') {
        new_image('x.png')
        console.log("x");
    }

    if (keyPressed == '81') {
        new_image('q.png')
        console.log("q");
    }

    if (keyPressed == '82') {
        new_image('r.png')
        console.log("r");
    }

    if (keyPressed == '83') {
        new_image('s.png')
        console.log("s");
    }

}

// Direction defintion

function up() {

    if (playery >= 0) {
        playery = playery - block_height;
        console.log("Img height = " + block_height);
        console.log("When UP key is pressed ,  X = " + playerx + "Y = " + playery);
        canvas.remove(object_player);
        player_update()
    }

}

function down() {

    if (playery <= 500) {
        playery = playery + block_height;
        console.log("Img height = " + block_height);
        console.log("When UP key is pressed ,  X = " + playerx + "Y = " + playery);
        canvas.remove(object_player);
        player_update()
    }

}


function left() {

    if (playerx > 0) {
        playery = playery - block_height;
        console.log("Img height = " + block_height);
        console.log("When UP key is pressed ,  X = " + playerx + "Y = " + playery);
        canvas.remove(object_player);
        player_update()
    }

}

function right() {

    if (playery <= 850) {
        playery = playery + block_height;
        console.log("Img height = " + block_height);
        console.log("When UP key is pressed ,  X = " + playerx + "Y = " + playery);
        canvas.remove(object_player);
        player_update()
    }

}