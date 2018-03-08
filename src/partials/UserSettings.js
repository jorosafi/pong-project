import { SVG_NS } from '../settings'; 

export default class UserSettings {

  constructor() {

  }

  checkForm(){

    document.getElementById('settings-button').addEventListener('click', function(e){
      e.preventDefault();

      let ballDropdown = document.getElementById('ball-size');
      let ballSize = ballDropdown.options[ballDropdown.selectedIndex].value;

      let paddleDropdown = document.getElementById('paddle-size');
      let paddleHeight = paddleDropdown.options[paddleDropdown.selectedIndex].value;

      let scoreDropdown = document.getElementById('winning-score');
      let winningScore = scoreDropdown.options[scoreDropdown.selectedIndex].value;

      console.log(ballSize);
      console.log(paddleHeight);
      console.log(winningScore);

    //   //this gets the value for the paddleHeight
    //   for (var i = 0; i < 3; i++){
    //     if (document.getElementsByName('paddle-size')[i].checked){
    //       console.log(document.getElementsByName('paddle-size')[i]);
    //       // this.paddleHeight = this.paddleRadio[i].value;
    //       break;
    //     }
    //   }
      
    //   //this gets the value for the ballRadius
    //   for (var i2 = 0; i2 < 3; i2++){
    //     if (document.getElementsByName('ball-size')[i2].checked){
    //       console.log(document.getElementsByName('ball-size')[i2].checked)
    //       // this.ballRadius = document.getElementsByName('ball-size')[i2].value;
    //       break;
    //     }
    //   }
      
    //   //this gets the value for the ballSpeed
    //   for (var i3 = 0;  i3 < 3; i3++){
    //     if (document.getElementsByName('ball-speed')[i3].checked){
    //       console.log(document.getElementsByName('ball-speed')[i3])
    //       // this.ballSpeed = document.getElementsByName('ball-speed')[i3].value;
    //       break;
    //     }
    //   }
      
    //   console.log(this.scoreBox);
    });


  }
}