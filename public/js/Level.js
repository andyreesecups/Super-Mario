import Compositer from './Compositer.js';
import {Matrix} from './math.js';

export default class Level {
	constructor() {
		this.comp = new Compositer();
		this.entities = new Set();
		this.tiles = new Matrix();
	}

	update(deltaTime) {
		this.entities.forEach(entity => {
			entity.update(deltaTime);
		});
	}
}