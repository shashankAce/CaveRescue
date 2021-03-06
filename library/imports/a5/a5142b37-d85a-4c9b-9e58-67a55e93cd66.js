"use strict";
cc._RF.push(module, 'a5142s32FpMm55YZ6Vek81m', 'Jet');
// Script/Jet.ts

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
var Jet = /** @class */ (function (_super) {
    __extends(Jet, _super);
    function Jet() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.force = 500;
        _this.upforce = 2000;
        _this.horizontalVmax = 300;
        _this.verticalVmax = 200;
        _this.direction = 0;
        _this.key = { up: false, right: false, left: false };
        return _this;
    }
    Jet.prototype.onLoad = function () {
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
        this.rigidBody = this.getComponent(cc.RigidBody);
    };
    Jet.prototype.onKeyDown = function (event) {
        switch (event.keyCode) {
            case cc.macro.KEY.up:
                this.key.up = true;
                break;
            case cc.macro.KEY.right:
                this.key.right = true;
                this.changeShipAngle(-30);
                break;
            case cc.macro.KEY.left:
                this.changeShipAngle(30);
                this.key.left = true;
                break;
        }
    };
    Jet.prototype.onKeyUp = function (event) {
        switch (event.keyCode) {
            case cc.macro.KEY.up:
                this.key.up = false;
                break;
            case cc.macro.KEY.right:
                this.key.right = false;
                this.changeShipAngle(0);
                break;
            case cc.macro.KEY.left:
                this.key.left = false;
                this.changeShipAngle(0);
                break;
        }
    };
    Jet.prototype.changeShipAngle = function (angle) {
        cc.tween(this.node)
            .to(0.2, { angle: angle })
            .start();
    };
    Jet.prototype.start = function () {
        this.rigidBody.fixedRotation = true;
        // this.rigidBody.enabledContactListener = true;
    };
    Jet.prototype.update = function (dt) {
        if (this.key.left && this.rigidBody.linearVelocity.x > -this.horizontalVmax) {
            this.rigidBody.applyForceToCenter(new cc.Vec2(-1 * this.force, 0), true);
            // console.log(this.rigidBody.linearVelocity.x);
        }
        if (this.key.right && this.rigidBody.linearVelocity.x < this.horizontalVmax) {
            this.rigidBody.applyForceToCenter(new cc.Vec2(1 * this.force, 0), true);
            // console.log(this.rigidBody.linearVelocity.x);
        }
        if (this.key.up && this.rigidBody.linearVelocity.y < this.verticalVmax) {
            this.rigidBody.applyForceToCenter(new cc.Vec2(0, this.upforce), true);
        }
    };
    Jet.prototype.onDestroy = function () {
        // Cancel keyboard input monitoring
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    };
    Jet = __decorate([
        ccclass
    ], Jet);
    return Jet;
}(cc.Component));
exports.default = Jet;

cc._RF.pop();