nosex=0
nosey=0
function preload (){}
function setup(){
canvas=createCanvas(450,450)
canvas.position(800,200)
video=createCapture(VIDEO)
posenet=ml5.poseNet(video,modelLoaded)
posenet.on("pose",gotResult)
}
function draw(){
 background("#fe83d8")
    fill("#ad00ff")   
    textSize(32);
text('Bani', nosex, nosey);
}
function modelLoaded(){
    console.log("Model is Loaded")

}
function gotResult(result){
if (result.length > 0){
    console.log(result)  
    nosex=result[0].pose.nose.x
    nosey=result[0].pose.nose.y
}
    
}