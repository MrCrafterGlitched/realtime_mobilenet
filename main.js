function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  Classifier=ml5.imageClassifier("MobileNet",model_loaded)
}
function model_loaded() {
  console.log("Model is loaded.")
}
function draw() {
 image(video,0,0,300,300)
 Classifier.classify(video,getResults)
}
function getResults(error,results) {
  if (error) {
    console.log(error)
  }else{
    console.log(results)
    document.getElementById("Object_name").innerHTML=results[0].label
    document.getElementById("Object_accuracy").innerHTML=results[0].confidence.toFixed(3)
  }
}