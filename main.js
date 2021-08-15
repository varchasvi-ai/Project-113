function preload()
{

}

function setup()
{
    canvas = createCanvas(1000 , 1000);
    canvas.position(380 , 250);
    video = createCapture(VIDEO);
    video.hide();
}

function draw()
{
    colorMode(HSB);
    fill(75, 18, 44);
    strokeWeight(0);
    rect(0, 0, 650, 750);
    fill(60, 15, 65);
    strokeWeight(0);
    rect(25, 23, 600, 500);
    fill(60, 10, 72);
    strokeWeight(0);
    rect(45, 43, 550, 450);
    fill(24, 24, 87);
    strokeWeight(0);
    rect(25, 550, 600, 180);
    fill(26, 16, 100);
    strokeWeight(0);
    rect(45, 570, 560, 140);
    fill(21, 38, 80);
    textSize(50);
    textFont('fantasy');
    text('🍂 Happy Memories 🍂', 70, 650);

    image(video , 65 , 63, 500 , 400);
}

function take_snapshot()
{
    save( 'Image.png' );
}