import Compositer from './Compositer.js';
import TileCollider from './TileCollider.js';
import {Matrix} from './math.js';

export default class Level {
	constructor() {
		this.comp = new Compositer();
		this.entities = new Set();
		this.tiles = new Matrix();

		this.tileCollider = new TileCollider(this.tiles);
	}

	update(deltaTime) {
		this.entities.forEach(entity => {
			entity.update(deltaTime);

			this.tileCollider.test(entity);
		});
	}
}