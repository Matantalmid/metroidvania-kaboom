import { makePlayer } from '../entities/player.js';
import { setBackgroundColor, setMapColliders } from './roomUtils.js';

export async function room1(k, roomData) {
  setBackgroundColor(k, '#a2aed5');

  k.camScale(3);
  k.camPos(170, 100);
  k.setGravity(1000);

  const roomLayers = roomData.layers;

  const map = k.add([k.pos(0, 0), k.sprite('room1')]);
  const colliders = roomLayers[4].objects;
  const positions = roomLayers[5].objects;
  for (const layer of roomLayers) {
    if (layer.name === 'positions') {
      positions.push(...layer.objects);
      continue;
    }

    if (layer.name === 'colliders') {
      colliders.push(...layer.objects);
      break;
    }
  }
  setMapColliders(k, map, colliders);

  const player = makePlayer(k);

  for (const position of positions) {
    if (position.name === 'player') {
      player.setPosition(position.x, position.y);
      player.setControls();
    }
  }
}
