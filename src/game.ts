import {GameScene} from './scenes/game-scene';

const config: GameConfig = {
	width: 800,
	height: 600,
	type: Phaser.AUTO,
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

export class MyGame extends Phaser.Game {
	constructor(config: GameConfig) {
		super(config);
	}
}

window.addEventListener('load', () => {
	const game = new MyGame(config);
});
