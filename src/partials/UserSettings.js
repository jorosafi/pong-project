import { SVG_NS } from '../settings'; 

export default class UserSettings {
  constructor(paddleHeight, ballRadius, ballSpeed, winnerScore) {
    this.paddleHeight = 56;
    this.ballRadius = 8;
    this.ballSpeed = 6;
    this.winnerScore = 11;

//     .checked() - checks if radio button selected
// .value() - gets the value of the radio button 
// constructor includes the variables you are trying to set (ball size, paddle size, ball speed) as well as the variables for traversing the DOM. 


  }

  renderSettings(){
    //submitButton.onclick(function(){
      //check this for answer:https://stackoverflow.com/questions/9618504/get-radio-button-value-with-javascript
    // })
  }


  // -----------------

  document.getElementById("settings-button").addEventListener("click", function(){
  
    var paddleRadio = document.getElementsByName('paddle-size');
    var ballRadio = document.getElementsByName('ball-size');
    var speedRadio = document.getElementsByName('ball-speed');
    var scoreBox = document.getElementsByName("winning-score")[0].value;
    
    for (var i = 0, length = paddleRadio.length; i < length; i++){
     if (paddleRadio[i].checked){
    // do whatever you want with the checked radio
    console.log(paddleRadio[i].value);
  
    // only one radio can be logically checked, don't check the rest
    break;
     }
    }
    
    for (var i = 0, length = ballRadio.length; i < length; i++){
      if (ballRadio[i].checked){
    // do whatever you want with the checked radio
    console.log(ballRadio[i].value);
  
    // only one radio can be logically checked, don't check the rest
    break;
     }
    }
    
    for (var i = 0, length = speedRadio.length; i < length; i++){
   if (speedRadio[i].checked){
    // do whatever you want with the checked radio
    console.log(speedRadio[i].value);
  
    // only one radio can be logically checked, don't check the rest
    break;
     }
    }
    
  //   console.log(scoreBox);
  });