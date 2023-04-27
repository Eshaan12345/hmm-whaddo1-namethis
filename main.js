function startClassification() {
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/h2TrwFmVl/model.json', modelReady);
    navigator.mediaDevices.getUserMedia({audio:true});
}
function modelReady() {
    classifier.classify(gotResults);
}
function gotResults(error,results) {
   if(error){
    console.error(error);
   }     
   else{
    console.log(results)
    console.log(results);
    random_number_r=Math.floor(Math.random()*255)+1;
    random_number_g=Math.floor(Math.random()*255)+1;
    random_number_b=Math.floor(Math.random()*255)+1;
    document.getElementById("result_label").innerHTML='I can hear '+results[0].label;
    document.getElementById("result_confidence").innerHTML='Accuracy- '+(results[0].confidence*100).toFixed(2)+"%";
    document.getElementById("result_label").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
    document.getElementById("result_confidence").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
    img=document.getElementById('alien1');
    img1=document.getElementById('alien2');
    img2=document.getElementById('alien3');
    img3=document.getElementById('alien4');
    if(results[0].label=="Clapping"){
        img.src='nejknwkjnewkjdnejw.jpeg';
        img1.src='';
        img2.src='';
        img3.src='';
    }
    else if(results[0].label=="Snapping"){
        img.src='';
        img1.src='wndkjwnjdkewkjdnwjkdnjkwnd.jpeg';
        img2.src='';
        img3.src=''; 
    }
    else if(results[0].label=="Tapping"){
        img.src='';
        img1.src='';
        img2.src='aliens-02.png';
        img3.src=''; 
    }
    else{
        img.src='';
        img1.src='';
        img2.src='';
        img3.src='njnjhbjhbjhbjhbhj.jpeg'; 
    }
   }
}
function redirect101(){
    window.location("2.html");
}