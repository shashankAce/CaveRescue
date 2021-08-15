"use strict";
cc._RF.push(module, 'fafdbch3HlC85bxXeIOg1wg', 'Game');
// Script/Game.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Game = /** @class */ (function (_super) {
    __extends(Game, _super);
    function Game() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.gravity = -300;
        _this.wall = null;
        _this.gameSize = cc.v2(640, 960);
        _this.map = null;
        _this.jet = null;
        return _this;
        // update (dt) {}
    }
    Game.prototype.onLoad = function () {
        var physics_manager = cc.director.getPhysicsManager();
        physics_manager.enabled = true;
        physics_manager.debugDrawFlags = 1;
        physics_manager.gravity = cc.v2(0, this.gravity);
        this.wall = this.map.getLayers()[0];
    };
    Game.prototype.start = function () {
        var mapSize = this.map.getMapSize();
        var tileSize = this.map.getTileSize();
        var x = -(mapSize.width * tileSize.width) / 2 + tileSize.width / 2;
        var y = (mapSize.height * tileSize.height) / 2 - tileSize.height / 2;
        var offset = cc.v2(x, y);
        for (var i = 0; i < mapSize.width; i++) {
            for (var j = 0; j < mapSize.height; j++) {
                var n = this.wall.getTileGIDAt(i, j);
                // If tiles are present
                if (n != 0) {
                    var x_1 = offset.x + i * tileSize.width;
                    var y_1 = offset.y - j * tileSize.height;
                    // Add collision box
                    var collider = this.wall.node.addComponent(cc.PhysicsBoxCollider);
                    collider.offset.set(cc.v2(x_1, y_1));
                    collider.size.width = tileSize.width;
                    collider.size.height = tileSize.height;
                    collider.apply();
                }
            }
        }
    };
    __decorate([
        property(cc.TiledMap)
    ], Game.prototype, "map", void 0);
    __decorate([
        property(cc.RigidBody)
    ], Game.prototype, "jet", void 0);
    Game = __decorate([
        ccclass
    ], Game);
    return Game;
}(cc.Component));
exports.default = Game;

cc._RF.pop();