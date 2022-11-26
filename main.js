nosex=0
nosey=0
lwristx=0
lwristy=0
rwristx=0
rwristy=0
difference=0
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
    textSize(difference);
text('Bani', nosex, nosey);
document.getElementById("text").innerHTML=difference
}
function modelLoaded(){
    console.log("Model is Loaded")

}
function gotResult(result){
if (result.length > 0){
    console.log(result)  
    nosex=result[0].pose.nose.x
    nosey=result[0].pose.nose.y
    lwristx=result[0].pose.leftWrist.x
    lwristy=result[0].pose.leftWrist.y
    rwristx=result[0].pose.rightWrist.x
    rwristy=result[0].pose.rightWrist.y
    difference=floor(lwristx-rwristx)
    
}
    
}