import Compositer from './Compositer.js';
import Entity from './Entity.js';
import {loadLevel} from './loaders.js';
import {createMario} from './entities.js';
import {loadBackgroundSprites} from './sprites.js';
import {createBackgroundLayer, createSpriteLayer} from './layers.js';

const canvas = document.getElementById('screen');
const context = canvas.getContext('2d');

Promise.all([
	createMario(),
	loadBackgroundSprites(),
	loadLevel('1-1'),
])
.then(([mario, backgroundSprites, level]) => {
	const comp = new Compositer();

	const backgroundLayer = createBackgroundLayer(level.backgrounds, backgroundSprites);
	//comp.layers.push(backgroundLayer);

	const gravity = 0.5;

	const spriteLayer = createSpriteLayer(mario);
	comp.layers.push(spriteLayer);

	let deltaTime = 0;
	let lastTime = 0;


	function update(time) {
		deltaTime = time - lastTime;

		comp.draw(context);
		mario.update(deltaTime);
		console.log(mario.pos);
		mario.vel.y += gravity;
		requestAnimationFrame(update);
		//setTimeout(update, 1000/144);

		lastTime = time;
	}
	update();
});
	