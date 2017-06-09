import './boot';

import { Game, AUTO } from 'phaser';
import { HEIGHT, WIDTH } from './constants';
import sampleStage from './stages/sample';

const game = new Game(WIDTH, HEIGHT, AUTO, 'gameContainer');

game.state.add('sample', sampleStage);
game.state.start('sample');
