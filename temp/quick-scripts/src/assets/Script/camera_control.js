"use strict";
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