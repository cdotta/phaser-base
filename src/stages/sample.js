import { WIDTH, HEIGHT } from '../constants';

export default {
  create() {
    this.game.stage.backgroundColor = '#000000';
    this.game.add.text(WIDTH/2, HEIGHT/2, "Click anywhere to start", {
      font: '14px Space Mono',
      fill: '#FFFFFF',
    });
  }
}
