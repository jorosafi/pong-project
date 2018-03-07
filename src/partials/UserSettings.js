import { SVG_NS } from '../settings'; 

export default class UserSettings {
  constructor(x, y, size) {
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