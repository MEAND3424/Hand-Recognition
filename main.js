Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});

camera = document.getElementById("camera");
Webcam.attach('#camera');

function take_snapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="captrue_image" src="'+data_uri+'">';
    });
}
console.log('ml5.version', ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/IBFus28W3/modle.json",modelLoaded);

function modelLoaded(){
    console.log('Model Loaded');
    
}
function check(){
    img = document.getElementById('captrue_image');
    classifier.classify(img,gotResult);
}

function gotResult(error,results){
if (error){
    console.error(error);
}
else{
    console.log(results);
    document.getElementById("result_object_name").innerHTML = results[0].label;
    document.getElementById("result_object_accuracy").innerHTML = results[0].confidenc.toFixed(3);
}
}