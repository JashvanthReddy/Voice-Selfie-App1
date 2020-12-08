var SpeechRecognition= window.webkitSpeechRecognition;
var recognition= new SpeechRecognition();

function start(){
      document.getElementById("textbox").innerHTML= "";
      recognition.start();
}

recognition.onresult= function run(event){
      console.log(event);
      var content= event.results[0][0].transcript;
      console.log(content);
      document.getElementById("textbox").innerHTML= content;
if(content == "take my selfie"){
      console.log("taking selfie");
      speak();
}
      
}

function speak(){
      var synth= window.speechSynthesis;
      var speakdata= "taking your selfie in 5 seconds";
      var utterThis= new SpeechSynthesisUtterance(speakdata);
      synth.speak(utterThis);
      Webcam.attach(camera);
      setTimeout(function(){
      taking_snapShot();
      save();
      },5000);
}


Webcam.set({
      width: 320,
      height: 240,
      image_format: 'png',
      png_quality: 90
    });


camera= document.getElementById("camera");


function taking_snapShot(){
      Webcam.snap(function (data_uri){
      document.getElementById("result").innerHTML= '<img id= "myselfie" src= "' + data_uri + '">'; 
      })
}

function save(){
      link= document.getElementById("link"); 
      image= document.getElementById("myselfie").src;
      link.href= image;
      link.click();
}