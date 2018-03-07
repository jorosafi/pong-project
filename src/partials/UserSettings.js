import { SVG_NS } from '../settings'; 

export default class UserSettings {
  constructor(paddleHeight, ballRadius, ballSpeed, winnerScore) {
    this.paddleHeight = '';
    this.ballRadius = '';
    this.ballSpeed = '';
    this.winnerScore = '';


  }

  render(){

    document.getElementById('settings-button').addEventListener('click', function(){
  
      var paddleRadio = document.getElementsByName('paddle-size');
      var ballRadio = document.getElementsByName('ball-size');
      var speedRadio = document.getElementsByName('ball-speed');
      var scoreBox = document.getElementsByName('winning-score')[0].value;

      winnerScore = scoreBox //this gets the value for the winningScore
      
      //this gets the value for the paddleHeight
      for (var i = 0, length = paddleRadio.length; i < length; i++){
        if (paddleRadio[i].checked){
          paddleHeight = paddleRadio[i].value;
          break;
        }
      }
      
      //this gets the value for the ballRadius
      for (var i = 0, length = ballRadio.length; i < length; i++){
        if (ballRadio[i].checked){
          ballRadius = ballRadio[i].value;
          break;
        }
      }
      
      //this gets the value for the ballSpeed
      for (var i = 0, length = speedRadio.length; i < length; i++){
        if (speedRadio[i].checked){
          ballSpeed = speedRadio[i].value;
          break;
        }
      }  
    });

  }
}