"use strict";
exports.__esModule = true;
var readline = require("readline");
var rl = readline.createInterface(process.stdin, process.stdout);
var dungeonGenerator_1 = require("./dungeonGenerator");
var GameDungeon = /** @class */ (function () {
    function GameDungeon(seed, config) {
        this.dungeon = (0, dungeonGenerator_1.createDungeon)(seed, config);
        this.objects = (0, dungeonGenerator_1.createObjects)(this.dungeon, seed);
    }
    GameDungeon.prototype.print = function () {
        for (var i = 0; i < this.dungeon.grid.length; i++) {
            for (var j = 0; j < this.dungeon.grid[0].length; j++) {
                readline.cursorTo(process.stdout, this.dungeon.grid[i][j].position.x, this.dungeon.grid[i][j].position.y);
                if (this.dungeon.grid[i][j].type == 'space')
                    console.log("█");
                else
                    console.log("*");
            }
            for (var i_1 = 0; i_1 < this.objects.length; i_1++) {
                readline.cursorTo(process.stdout, this.objects[i_1].position.x, this.objects[i_1].position.y);
                console.log("@");
            }
        }
        rl.close();
    };
    GameDungeon.prototype.getTileAt = function (x, y) {
        return this.dungeon.grid[x][y];
    };
    GameDungeon.prototype.getObjectAt = function (x, y) {
        var object = '';
        this.objects.forEach(function (element) {
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
