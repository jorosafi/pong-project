import { SVG_NS } from '../settings'; 

export default class UserSettings {

  constructor(userBallSize, userPaddleHeight, userWinningScore) {
    // let ballDropdown = document.getElementById('ball-size');
    // this.userBallSize = ballDropdown.options[ballDropdown.selectedIndex].value;

    // let paddleDropdown = document.getElementById('paddle-size');
    // this.userPaddleHeight = paddleDropdown.options[paddleDropdown.selectedIndex].value;

    // let scoreDropdown = document.getElementById('winning-score');
    // this.userWinningScore = scoreDropdown.options[scoreDropdown.selectedIndex].value;
  }

  checkForm(){
    document.getElementById('settings-button').addEventListener('click', function(e){
      e.preventDefault();

      let ballDropdown = document.getElementById('ball-size');
      let userBallSize = ballDropdown.options[ballDropdown.selectedIndex].value;

      let paddleDropdown = document.getElementById('paddle-size');
      let userPaddleHeight = paddleDropdown.options[paddleDropdown.selectedIndex].value;

      let scoreDropdown = document.getElementById('winning-score');
      let userWinningScore = scoreDropdown.options[scoreDropdown.selectedIndex].value;

      console.log(userBallSize);
      console.log(userPaddleHeight);
      console.log(userWinningScore);
    });
  }
}