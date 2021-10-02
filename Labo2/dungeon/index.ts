import { forEach } from 'lodash';
import readline from 'readline'
const rl = readline.createInterface(process.stdin, process.stdout);
import {
  Config,
  createDungeon,
  createObjects,
  Dungeon,
  GameObject,
  GameTile,
} from './dungeonGenerator';

interface IDungeon {
  print(): void;
  getTileAt(x: number, y: number): GameTile | undefined;
  getObjectAt(x: number, y: number): GameObject | undefined;
  objects: GameObject[];
}

class GameDungeon implements IDungeon {
  objects: GameObject[];
  dungeon: Dungeon;
  constructor(seed: string, config: Config) {
    this.dungeon = createDungeon(seed, config);
    this.objects = createObjects(this.dungeon, seed);
  }
  print(): void {
    for (let i = 0; i < this.dungeon.grid.length; i++) {

      for (let j = 0; j < this.dungeon.grid[0].length; j++) {
          readline.cursorTo(process.stdout, this.dungeon.grid[i][j].position.x, this.dungeon.grid[i][j].position.y)
          if (this.dungeon.grid[i][j].type == 'space')
              console.log("█")
          else
              console.log("*")
      }

      for (let i = 0; i < this.objects.length; i++) {
          readline.cursorTo(process.stdout, this.objects[i].position.x, this.objects[i].position.y)
          console.log("@")

      }
  }
  rl.close()
  }
  getTileAt(x: number, y: number): GameTile | undefined {
    return this.dungeon.grid[x][y];
  }
  getObjectAt(x: number, y: number): GameObject | undefined {
    let object: any = '';
    this.objects.forEach((element) => {
      if (element.position.x == x && element.position.y == y) object = element;
    });
    return object;
  }
}
new GameDungeon('ini2t2ialSeed', {
  gridHeight: 50,
  gridWidth: 50,
  maxRooms: 9,
  roomSizeRange: [5, 10],
}).print();

console.log('███████████████████');
console.log('█ not implemented █');
console.log('███████████████████');
