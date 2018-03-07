import { SVG_NS } from '../settings';

export default class Score {
  constructor(x, y, size, winningScore) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.winningSound = new Audio('public/sounds/crowd-cheer.wav');
    this.winningScore = winningScore
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

    if(score === this.winningScore){
      this.winningSound.play(); 

      let winnerText = document.createElementNS(SVG_NS, 'text');
      winnerText.setAttributeNS(null, 'x', '185');
      winnerText.setAttributeNS(null, 'y', '148');
      winnerText.setAttributeNS(null, 'font-family', '"Silkscreen Web", monotype');
      winnerText.setAttributeNS(null, 'font-size', '35');
      winnerText.setAttributeNS(null, 'fill', 'white');
      winnerText.textContent = `The winner is ${player}!`;
      svg.appendChild(winnerText);

      
      document.getElementById('restart').style.display='block';
      }
  } 
}