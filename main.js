
noseX=0;
noseY=0;
x=50;
y=0;

filter = "";

function preload(){
    filter = loadImage("https://i.postimg.cc/3x3QzSGq/m.png");
}

function setup(){
    canvas = createCanvas(300, 300);
    canvas.position(300, 300);
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPose);
}

function modelLoaded(){
    console.log("PoseNet Is Initialised");
}

function gotPose(results){
    if(results.length > 0){
      console.log(results);
      noseX = results[0].pose.nose.x;
      noseY = results[0].pose.nose.y;
      console.log("nose x = " + results[0].pose.nose.x);
      console.log("nose y = " + results[0].pose.nose.y);
    }
}

function draw(){
    image(video, 0, 0, 300, 300);
    image(image1, noseX + x, noseY + y, 100, 100);
}

function saveMe(){
    save("Here is you filter snapshot. Have fun looking reeally funny.png")
}

function mustache(){
    image1 = loadImage("https://i.postimg.cc/3x3QzSGq/m.png");
    x = 50;
    y = 0;
}

function lipstick(){
    image1 = loadImage("https://i.postimg.cc/PxFvYgkv/l1.png");
    x = 100;
    y = -10;
}
