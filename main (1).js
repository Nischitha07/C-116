noseX = 0;
noseY = 0;
function preload(){
img_clown_nose = loadImage("https://i.postimg.cc/DzGrnqqq/red-nose.png");

}
function setup(){
    canvas = createCanvas(500 , 400);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(500 , 400);
    video.hide();
    poseNet = ml5.poseNet(video , modelLoaded);
    poseNet.on('pose' , gotPoses);
}
function draw(){
image(video , 0 , 0 , 500 , 400);
/*fill(255, 0, 25);
stroke(255, 0, 25);
circle(noseX , noseY , 30);*/
image(img_clown_nose , noseX , noseY , 50, 50 );
}
function take_snapshot()
{
    save("Filter_snapshot.png");
}
function modelLoaded()
{
    console.log("modelLoaded");
}
function gotPoses(results)
{
console.log("Pose Net has initialized");
if(results.length > 0)
{
 console.log(results);
 noseX = results [0].pose.nose.x - 20;
 noseY = results [0].pose.nose.y-15;
 console.log(noseX);
 console.log(noseY);
 console.log("nose x = " + results [0].pose.nose.x);
 console.log("nose y = " + results [0].pose.nose.y);
}
}