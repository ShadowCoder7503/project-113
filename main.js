function ApplyColor(){    
}
function setup(){
    canvas= createCanvas(640,480)
    canvas.position(500,350);
    video = createCapture(VIDEO);
    tint(128,0,128)
    video.hide();
}

function draw(){
    image(video,0,0,640,480);
    fill(Math.floor(Math.random(1) * 255),Math.floor(Math.random(1) * 255),Math.floor(Math.random(1) * 255));
    stroke(255, 0, 0);
     circle(20,20,40);
     circle(620,20,40);
     circle(620,460,40);
     circle(20,460,40);
     fill(Math.floor(Math.random(1) * 255),Math.floor(Math.random(1) * 255),Math.floor(Math.random(1) * 255));
     stroke(255, 0, 0);
     rect(40,5,560,30);
     rect(40,448,560,30);
     rect(605,40,30,400);
     rect(5,40,30,400);
}
function take_snapshot(){
    save("EditedImage.png");

}
