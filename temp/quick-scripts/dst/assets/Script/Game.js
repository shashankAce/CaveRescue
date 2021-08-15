
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Game.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxHYW1lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQWtDLHdCQUFZO0lBQTlDO1FBQUEscUVBa0RDO1FBaERHLGFBQU8sR0FBVyxDQUFDLEdBQUcsQ0FBQztRQUN2QixVQUFJLEdBQWtCLElBQUksQ0FBQztRQUMzQixjQUFRLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFFSixTQUFHLEdBQWdCLElBQUksQ0FBQztRQUN2QixTQUFHLEdBQWlCLElBQUksQ0FBQzs7UUEwQ2pELGlCQUFpQjtJQUNyQixDQUFDO0lBekNHLHFCQUFNLEdBQU47UUFDSSxJQUFJLGVBQWUsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDdEQsZUFBZSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDL0IsZUFBZSxDQUFDLGNBQWMsR0FBRyxDQUFDLENBQUM7UUFDbkMsZUFBZSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFakQsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFRCxvQkFBSyxHQUFMO1FBRUksSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNwQyxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBRXRDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsUUFBUSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDbkUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFFckUsSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFekIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDcEMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ3JDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFFckMsdUJBQXVCO2dCQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7b0JBRVIsSUFBSSxHQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQztvQkFDdEMsSUFBSSxHQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQztvQkFFdkMsb0JBQW9CO29CQUNwQixJQUFJLFFBQVEsR0FBMEIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO29CQUN6RixRQUFRLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUMsRUFBRSxHQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNqQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDO29CQUNyQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDO29CQUN2QyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7aUJBQ3BCO2FBQ0o7U0FDSjtJQUNMLENBQUM7SUF6Q3NCO1FBQXRCLFFBQVEsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDO3FDQUF5QjtJQUN2QjtRQUF2QixRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQztxQ0FBMEI7SUFQaEMsSUFBSTtRQUR4QixPQUFPO09BQ2EsSUFBSSxDQWtEeEI7SUFBRCxXQUFDO0NBbERELEFBa0RDLENBbERpQyxFQUFFLENBQUMsU0FBUyxHQWtEN0M7a0JBbERvQixJQUFJIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBncmF2aXR5OiBudW1iZXIgPSAtMzAwO1xyXG4gICAgd2FsbDogY2MuVGlsZWRMYXllciA9IG51bGw7XHJcbiAgICBnYW1lU2l6ZSA9IGNjLnYyKDY0MCwgOTYwKTtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuVGlsZWRNYXApIG1hcDogY2MuVGlsZWRNYXAgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlJpZ2lkQm9keSkgamV0OiBjYy5SaWdpZEJvZHkgPSBudWxsO1xyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICB2YXIgcGh5c2ljc19tYW5hZ2VyID0gY2MuZGlyZWN0b3IuZ2V0UGh5c2ljc01hbmFnZXIoKTtcclxuICAgICAgICBwaHlzaWNzX21hbmFnZXIuZW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgcGh5c2ljc19tYW5hZ2VyLmRlYnVnRHJhd0ZsYWdzID0gMTtcclxuICAgICAgICBwaHlzaWNzX21hbmFnZXIuZ3Jhdml0eSA9IGNjLnYyKDAsIHRoaXMuZ3Jhdml0eSk7XHJcblxyXG4gICAgICAgIHRoaXMud2FsbCA9IHRoaXMubWFwLmdldExheWVycygpWzBdO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG5cclxuICAgICAgICBsZXQgbWFwU2l6ZSA9IHRoaXMubWFwLmdldE1hcFNpemUoKTtcclxuICAgICAgICBsZXQgdGlsZVNpemUgPSB0aGlzLm1hcC5nZXRUaWxlU2l6ZSgpO1xyXG5cclxuICAgICAgICBsZXQgeCA9IC0obWFwU2l6ZS53aWR0aCAqIHRpbGVTaXplLndpZHRoKSAvIDIgKyB0aWxlU2l6ZS53aWR0aCAvIDI7XHJcbiAgICAgICAgbGV0IHkgPSAobWFwU2l6ZS5oZWlnaHQgKiB0aWxlU2l6ZS5oZWlnaHQpIC8gMiAtIHRpbGVTaXplLmhlaWdodCAvIDI7XHJcblxyXG4gICAgICAgIGxldCBvZmZzZXQgPSBjYy52Mih4LCB5KTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtYXBTaXplLndpZHRoOyBpKyspIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBtYXBTaXplLmhlaWdodDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbiA9IHRoaXMud2FsbC5nZXRUaWxlR0lEQXQoaSwgaik7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gSWYgdGlsZXMgYXJlIHByZXNlbnRcclxuICAgICAgICAgICAgICAgIGlmIChuICE9IDApIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHggPSBvZmZzZXQueCArIGkgKiB0aWxlU2l6ZS53aWR0aDtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgeSA9IG9mZnNldC55IC0gaiAqIHRpbGVTaXplLmhlaWdodDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gQWRkIGNvbGxpc2lvbiBib3hcclxuICAgICAgICAgICAgICAgICAgICBsZXQgY29sbGlkZXI6IGNjLlBoeXNpY3NCb3hDb2xsaWRlciA9IHRoaXMud2FsbC5ub2RlLmFkZENvbXBvbmVudChjYy5QaHlzaWNzQm94Q29sbGlkZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbGxpZGVyLm9mZnNldC5zZXQoY2MudjIoeCwgeSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbGxpZGVyLnNpemUud2lkdGggPSB0aWxlU2l6ZS53aWR0aDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xsaWRlci5zaXplLmhlaWdodCA9IHRpbGVTaXplLmhlaWdodDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xsaWRlci5hcHBseSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcbn1cclxuIl19