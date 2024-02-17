async function playMusic(){
    var myAudio = new Audio();
    myAudio.src = "https://upload.wikimedia.org/wikipedia/commons/c/c1/Dramatic_Trailer_by_Rafael_Krux.ogg";
    myAudio.play(); 
    myAudio.loop = true;
} 

playMusic();




var i = 0;
var txt = 'Hello! I am your agent, and I am running late. Please help me as I make my way towards your chat box. <Press any button to begin.'; 
var speed = 20; 

function typeWriter() {
  if (i < txt.length) {
    if (txt.charAt(i) === '<') {
        document.getElementById("speechBubble").innerHTML += "<br><br>";
      } else {
        document.getElementById("speechBubble").innerHTML += txt.charAt(i);
      }
    i++;
    setTimeout(typeWriter, speed);
  }
}
typeWriter();
