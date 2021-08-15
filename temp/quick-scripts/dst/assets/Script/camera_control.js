
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/camera_control.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0301aNoSStPeb+ufHYv9cO0', 'camera_control');
// Script/camera_control.ts

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
var CameraControl = /** @class */ (function (_super) {
    __extends(CameraControl, _super);
    function CameraControl() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.jet = null;
        _this.gameSize = cc.v2(640, 960);
        _this.map = null;
        _this.mapSize = null;
        _this.tileSize = null;
        return _this;
    }
    CameraControl.prototype.start = function () {
        this.mapSize = this.map.getMapSize();
        this.tileSize = this.map.getTileSize();
    };
    CameraControl.prototype.update = function (dt) {
        this.followJet(dt);
    };
    CameraControl.prototype.followJet = function (dt) {
        var targetPos = this.jet.getPosition();
        //targetPos.x = cc.misc.clampf(targetPos.x, -this.tileSize.width, (this.mapSize.width * this.tileSize.width) / 2 + this.tileSize.width);
        var currentPos = this.node.getPosition();
        currentPos.lerp(targetPos, 0.2, currentPos);
        this.node.setPosition(currentPos);
    };
    __decorate([
        property(cc.Node)
    ], CameraControl.prototype, "jet", void 0);
    __decorate([
        property(cc.TiledMap)
    ], CameraControl.prototype, "map", void 0);
    CameraControl = __decorate([
        ccclass
    ], CameraControl);
    return CameraControl;
}(cc.Component));
exports.default = CameraControl;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxjYW1lcmFfY29udHJvbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUEyQyxpQ0FBWTtJQUF2RDtRQUFBLHFFQTZCQztRQTFCRyxTQUFHLEdBQVksSUFBSSxDQUFDO1FBRXBCLGNBQVEsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUVKLFNBQUcsR0FBZ0IsSUFBSSxDQUFDO1FBRS9DLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFDeEIsY0FBUSxHQUFZLElBQUksQ0FBQzs7SUFtQjdCLENBQUM7SUFqQkcsNkJBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNyQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDM0MsQ0FBQztJQUVELDhCQUFNLEdBQU4sVUFBTyxFQUFFO1FBQ0wsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUN2QixDQUFDO0lBRUQsaUNBQVMsR0FBVCxVQUFVLEVBQUU7UUFDUixJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3ZDLHdJQUF3STtRQUV4SSxJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3pDLFVBQVUsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLEdBQUcsRUFBRSxVQUFVLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBekJEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7OENBQ0U7SUFJRztRQUF0QixRQUFRLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQzs4Q0FBeUI7SUFQOUIsYUFBYTtRQURqQyxPQUFPO09BQ2EsYUFBYSxDQTZCakM7SUFBRCxvQkFBQztDQTdCRCxBQTZCQyxDQTdCMEMsRUFBRSxDQUFDLFNBQVMsR0E2QnREO2tCQTdCb0IsYUFBYSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FtZXJhQ29udHJvbCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBqZXQ6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIGdhbWVTaXplID0gY2MudjIoNjQwLCA5NjApO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5UaWxlZE1hcCkgbWFwOiBjYy5UaWxlZE1hcCA9IG51bGw7XHJcblxyXG4gICAgbWFwU2l6ZTogY2MuU2l6ZSA9IG51bGw7XHJcbiAgICB0aWxlU2l6ZTogY2MuU2l6ZSA9IG51bGw7XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgdGhpcy5tYXBTaXplID0gdGhpcy5tYXAuZ2V0TWFwU2l6ZSgpO1xyXG4gICAgICAgIHRoaXMudGlsZVNpemUgPSB0aGlzLm1hcC5nZXRUaWxlU2l6ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkdCkge1xyXG4gICAgICAgIHRoaXMuZm9sbG93SmV0KGR0KTtcclxuICAgIH1cclxuXHJcbiAgICBmb2xsb3dKZXQoZHQpIHtcclxuICAgICAgICBsZXQgdGFyZ2V0UG9zID0gdGhpcy5qZXQuZ2V0UG9zaXRpb24oKTtcclxuICAgICAgICAvL3RhcmdldFBvcy54ID0gY2MubWlzYy5jbGFtcGYodGFyZ2V0UG9zLngsIC10aGlzLnRpbGVTaXplLndpZHRoLCAodGhpcy5tYXBTaXplLndpZHRoICogdGhpcy50aWxlU2l6ZS53aWR0aCkgLyAyICsgdGhpcy50aWxlU2l6ZS53aWR0aCk7XHJcblxyXG4gICAgICAgIGxldCBjdXJyZW50UG9zID0gdGhpcy5ub2RlLmdldFBvc2l0aW9uKCk7XHJcbiAgICAgICAgY3VycmVudFBvcy5sZXJwKHRhcmdldFBvcywgMC4yLCBjdXJyZW50UG9zKTtcclxuICAgICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24oY3VycmVudFBvcyk7XHJcbiAgICB9XHJcbn1cclxuIl19