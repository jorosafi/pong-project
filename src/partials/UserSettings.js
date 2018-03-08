import { SVG_NS } from '../settings'; 

export default class UserSettings {

  // constructor() {

  // }

  checkForm(){
    document.getElementById('settings-button').addEventListener('click', function(e){
      e.preventDefault();

      let ballDropdown = document.getElementById('ball-size');
      let userBallSize = ballDropdown.options[ballDropdown.selectedIndex].value;

      let paddleDropdown = document.getElementById('paddle-size');
      let userPaddleHeight = paddleDropdown.options[paddleDropdown.selectedIndex].value;

      let scoreDropdown = document.getElementById('winning-score');
      let userWinningScore = scoreDropdown.options[scoreDropdown.selectedIndex].value;

      return {
        userBallSize,
        userPaddleHeight,
        userWinningScore
      }
      // console.log(userBallSize);
      // console.log(userPaddleHeight);
      // console.log(userWinningScore);
    });
  }
}