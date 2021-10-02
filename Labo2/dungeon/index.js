"use strict";
const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);
exports.__esModule = true;
var dungeonGenerator_1 = require("./dungeonGenerator");
var GameDungeon = /** @class */ (function() {
    function GameDungeon(seed, config) {
        this.dungeon = (0, dungeonGenerator_1.createDungeon)(seed, config);
        this.objects = (0, dungeonGenerator_1.createObjects)(this.dungeon, seed);
    }
    GameDungeon.prototype.print = function() {
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
    };
    GameDungeon.prototype.getTileAt = function(x, y) {
        return this.dungeon.grid[x][y];
    };
    GameDungeon.prototype.getObjectAt = function(x, y) {
        var object = '';
        this.objects.forEach(function(element) {
            if (element.position.x == x && element.position.y == y)
                object = element;
        });
        return object;
    };
    return GameDungeon;
}());
new GameDungeon('ini2t2ialSeed', {
    gridHeight: 50,
    gridWidth: 50,
    maxRooms: 9,
    roomSizeRange: [5, 10]
}).print();
console.log('███████████████████');
console.log('█ not implemented █');
console.log('███████████████████');