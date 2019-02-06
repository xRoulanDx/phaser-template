import {GameScene} from './scenes/game-scene';
import {AUTO, Game} from 'phaser';

const config: GameConfig = {
	width: 800,
	height: 600,
	type: AUTO,
	parent: 'game',
	scene: GameScene,
	physics: {
		default: 'arcade',
		arcade: {
			gravity: {y: 300},
			debug: false
		}
	}
};

export class MyGame extends Game {
	constructor(config: GameConfig) {
		super(config);
	}
}

window.addEventListener('load', () => {
	var game = new MyGame(config);
});
