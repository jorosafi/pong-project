import { SVG_NS } from '../settings';

export default class Score {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.winningSound = new Audio('public/sounds/pong-04.wav');
  }
  
  render(svg, score, player) {
    let text = document.createElementNS(SVG_NS, 'text');
    text.setAttributeNS(null, 'x', this.x);
    text.setAttributeNS(null, 'y', this.y);
    text.setAttributeNS(null, 'font-family', '"Silkscreen Web", monotype');
    text.setAttributeNS(null, 'font-size', this.size);
    text.setAttributeNS(null, 'fill', 'white');
    text.textContent = score;
    svg.appendChild(text);

    let winningScore = 3;
    if(score === winningScore){
      this.winningSound.play(); //sound not playing

      let winnerElement = document.getElementById('winner');
      winnerElement.innerHTML = ''
      let h2 = document.createElement('h2');
      h2.innerHTML = `Thw winner is ${player}`;
      winnerElement.appendChild(h2);    
      }
  } 
}