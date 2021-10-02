"use strict";
var __spreadArray = (this && this.__spreadArray) || function(to, from, pack) {
    if (pack || arguments.length === 2)
        for (var i = 0, l = from.length, ar; i < l; i++) {
            if (ar || !(i in from)) {
                if (!ar) ar = Array.prototype.slice.call(from, 0, i);
                ar[i] = from[i];
            }
        }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
exports.createDungeon = exports.createObjects = void 0;
var seedrandom_1 = require("seedrandom");
//settings
var GRID_HEIGHT = 100;
var GRID_WIDTH = 100;
var MAX_ROOMS = 10;
var ROOM_SIZE_RANGE = [15, 40];
var DEFAULT_CONFIG = {
    gridHeight: GRID_HEIGHT,
    gridWidth: GRID_WIDTH,
    maxRooms: MAX_ROOMS,
    roomSizeRange: ROOM_SIZE_RANGE
};
var random = function(rng, min, max) {
    if (min < 1 || max < 1) {
        return rng() * (max - min) + min;
    }
    return Math.floor(rng() * (max - min + 1)) + min;
};
var createObjects = function(dungeon, seed) {
    var rng = seedrandom_1(seed);
    return dungeon.rooms.map(function(room) {
        var x = random(rng, room.x + 1, room.x + room.width - 1);
        var y = random(rng, room.y + 1, room.y + room.height - 1);
        return {
            name: 'switch',
            position: { x: x, y: y }
        };
    });
};
exports.createObjects = createObjects;
var createDungeon = function(seed, config) {
    if (seed === void 0) { seed = 'initialSeed'; }
    if (config === void 0) { config = DEFAULT_CONFIG; }
    var rng = seedrandom_1(seed);
    // HELPER FUNCTIONS FOR CREATING THE MAP
    var isValidRoomPlacement = function(grid, _a) {
        var x = _a.x,
            y = _a.y,
            _b = _a.width,
            width = _b === void 0 ? 1 : _b,
            _c = _a.height,
            height = _c === void 0 ? 1 : _c;
        // check if on the edge of or outside of the grid
        if (y < 1 || y + height > grid.length - 1) {
            return false;
        }
        if (x < 1 || x + width > grid[0].length - 1) {
            return false;
        }
        // check if on or adjacent to existing room
        for (var i = y - 1; i < y + height + 1; i++) {
            for (var j = x - 1; j < x + width + 1; j++) {
                if (grid[i][j].type === 'floor') {
                    return false;
                }
            }
        }
        // all grid cells are clear
        return true;
    };
    var placeCells = function(grid, _a, type) {
        var x = _a.x,
            y = _a.y,
            _b = _a.width,
            width = _b === void 0 ? 1 : _b,
            _c = _a.height,
            height = _c === void 0 ? 1 : _c,
            id = _a.id;
        if (type === void 0) { type = 'floor'; }
        for (var i = y; i < y + height; i++) {
            for (var j = x; j < x + width; j++) {
                grid[i][j] = { type: type, id: id, position: { x: j, y: i } };
            }
        }
        return grid;
    };
    var createRoomsFromSeed = function(grid, _a, range) {
        var x = _a.x,
            y = _a.y,
            width = _a.width,
            height = _a.height;
        if (range === void 0) { range = config.roomSizeRange; }
        // range for generating the random room heights and widths
        var min = range[0],
            max = range[1];
        // generate room values for each edge of the seed room
        var roomValues = [];
        var north = {
            height: random(rng, min, max),
            width: random(rng, min, max)
        };
        north.x = random(rng, x, x + width - 1);
        north.y = y - north.height - 1;
        north.doorx = random(rng, north.x, Math.min(north.x + north.width, x + width) - 1);
        north.doory = y - 1;
        north.id = 'N';
        roomValues.push(north);
        var east = {
            height: random(rng, min, max),
            width: random(rng, min, max)
        };
        east.x = x + width + 1;
        east.y = random(rng, y, height + y - 1);
        east.doorx = east.x - 1;
        east.doory = random(rng, east.y, Math.min(east.y + east.height, y + height) - 1);
        east.id = 'E';
        roomValues.push(east);
        var south = {
            height: random(rng, min, max),
            width: random(rng, min, max)
        };
        south.x = random(rng, x, width + x - 1);
        south.y = y + height + 1;
        south.doorx = random(rng, south.x, Math.min(south.x + south.width, x + width) - 1);
        south.doory = y + height;
        south.id = 'S';
        roomValues.push(south);
        var west = {
            height: random(rng, min, max),
            width: random(rng, min, max)
        };
        west.x = x - west.width - 1;
        west.y = random(rng, y, height + y - 1);
        west.doorx = x - 1;
        west.doory = random(rng, west.y, Math.min(west.y + west.height, y + height) - 1);
        west.id = 'W';
        roomValues.push(west);
        var rooms = [];
        roomValues.forEach(function(room) {
            if (isValidRoomPlacement(grid, room)) {
                // place room
                grid = placeCells(grid, room);
                // place door
                grid = placeCells(grid, { x: room.doorx, y: room.doory }, 'door');
                // need placed room values for the next seeds
                rooms.push(room);
            }
        });
        return { grid: grid, rooms: rooms };
    };
    // BUILD OUT THE MAP
    // 1. make a grid of 'empty' cells, with a random opacity value (for styling)
    var grid = [];
    for (var i = 0; i < config.gridHeight; i++) {
        grid.push([]);
        for (var j = 0; j < config.gridWidth; j++) {
            grid[i].push({
                type: 'space',
                opacity: random(rng, 0.3, 0.8),
                position: { x: j, y: i }
            });
        }
    }
    // 2. random values for the first room
    var _a = config.roomSizeRange,
        min = _a[0],
        max = _a[1];
    var firstRoom = {
        x: random(rng, 1, config.gridWidth - max - 15),
        y: random(rng, 1, config.gridHeight - max - 15),
        height: random(rng, min, max),
        width: random(rng, min, max),
        id: 'O'
    };
    // 3. place the first room on to grid
    grid = placeCells(grid, firstRoom);
    // 4. using the first room as a seed, recursivley add rooms to the grid
    var growMap = function(grid, seedRooms, counter, maxRooms, rooms) {
        if (counter === void 0) { counter = 1; }
        if (maxRooms === void 0) { maxRooms = config.maxRooms; }
        if (counter + seedRooms.length > maxRooms || !seedRooms.length) {
            return { grid: grid, rooms: rooms };
        }
        grid = createRoomsFromSeed(grid, seedRooms.pop());
        seedRooms.push.apply(seedRooms, grid.rooms);
        counter += grid.rooms.length;
        return growMap(grid.grid, seedRooms, counter, config.maxRooms, __spreadArray(__spreadArray([], rooms, true), grid.rooms, true));
    };
    var tuple = growMap(grid, [firstRoom], 1, config.maxRooms, []);
    return { grid: tuple.grid, rooms: tuple.rooms };
};
exports.createDungeon = createDungeon;