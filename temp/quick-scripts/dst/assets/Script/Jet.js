
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Jet.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDO0lBRUQsdUJBQVMsR0FBVDtRQUNJLG1DQUFtQztRQUNuQyxFQUFFLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM1RSxFQUFFLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM1RSxDQUFDO0lBOUZnQixHQUFHO1FBRHZCLE9BQU87T0FDYSxHQUFHLENBK0Z2QjtJQUFELFVBQUM7Q0EvRkQsQUErRkMsQ0EvRmdDLEVBQUUsQ0FBQyxTQUFTLEdBK0Y1QztrQkEvRm9CLEdBQUciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEpldCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgcmlnaWRCb2R5OiBjYy5SaWdpZEJvZHk7XHJcblxyXG4gICAgZm9yY2U6IG51bWJlciA9IDUwMDtcclxuICAgIHVwZm9yY2U6IG51bWJlciA9IDIwMDA7XHJcblxyXG4gICAgaG9yaXpvbnRhbFZtYXg6IG51bWJlciA9IDMwMDtcclxuICAgIHZlcnRpY2FsVm1heDogbnVtYmVyID0gMjAwO1xyXG5cclxuICAgIGRpcmVjdGlvbjogbnVtYmVyID0gMDtcclxuICAgIGtleTogeyB1cDogYm9vbGVhbiwgcmlnaHQ6IGJvb2xlYW4sIGxlZnQ6IGJvb2xlYW4gfSA9IHsgdXA6IGZhbHNlLCByaWdodDogZmFsc2UsIGxlZnQ6IGZhbHNlIH07XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG5cclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vbihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX0RPV04sIHRoaXMub25LZXlEb3duLCB0aGlzKTtcclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vbihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX1VQLCB0aGlzLm9uS2V5VXAsIHRoaXMpO1xyXG5cclxuICAgICAgICB0aGlzLnJpZ2lkQm9keSA9IHRoaXMuZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG9uS2V5RG93bihldmVudDogY2MuRXZlbnQuRXZlbnRLZXlib2FyZCkge1xyXG4gICAgICAgIHN3aXRjaCAoZXZlbnQua2V5Q29kZSkge1xyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS51cDpcclxuICAgICAgICAgICAgICAgIHRoaXMua2V5LnVwID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkucmlnaHQ6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmtleS5yaWdodCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVNoaXBBbmdsZSgtMzApO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5sZWZ0OlxyXG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTaGlwQW5nbGUoMzApO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5rZXkubGVmdCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25LZXlVcChldmVudDogY2MuRXZlbnQuRXZlbnRLZXlib2FyZCkge1xyXG4gICAgICAgIHN3aXRjaCAoZXZlbnQua2V5Q29kZSkge1xyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS51cDpcclxuICAgICAgICAgICAgICAgIHRoaXMua2V5LnVwID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkucmlnaHQ6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmtleS5yaWdodCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTaGlwQW5nbGUoMCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkubGVmdDpcclxuICAgICAgICAgICAgICAgIHRoaXMua2V5LmxlZnQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlU2hpcEFuZ2xlKDApO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNoYW5nZVNoaXBBbmdsZShhbmdsZTogbnVtYmVyKSB7XHJcblxyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSlcclxuICAgICAgICAgICAgLnRvKDAuMiwgeyBhbmdsZTogYW5nbGUgfSlcclxuICAgICAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgdGhpcy5yaWdpZEJvZHkuZml4ZWRSb3RhdGlvbiA9IHRydWU7XHJcbiAgICAgICAgLy8gdGhpcy5yaWdpZEJvZHkuZW5hYmxlZENvbnRhY3RMaXN0ZW5lciA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGR0KSB7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmtleS5sZWZ0ICYmIHRoaXMucmlnaWRCb2R5LmxpbmVhclZlbG9jaXR5LnggPiAtdGhpcy5ob3Jpem9udGFsVm1heCkge1xyXG4gICAgICAgICAgICB0aGlzLnJpZ2lkQm9keS5hcHBseUZvcmNlVG9DZW50ZXIobmV3IGNjLlZlYzIoLTEgKiB0aGlzLmZvcmNlLCAwKSwgdHJ1ZSk7XHJcblxyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnJpZ2lkQm9keS5saW5lYXJWZWxvY2l0eS54KTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5rZXkucmlnaHQgJiYgdGhpcy5yaWdpZEJvZHkubGluZWFyVmVsb2NpdHkueCA8IHRoaXMuaG9yaXpvbnRhbFZtYXgpIHtcclxuICAgICAgICAgICAgdGhpcy5yaWdpZEJvZHkuYXBwbHlGb3JjZVRvQ2VudGVyKG5ldyBjYy5WZWMyKDEgKiB0aGlzLmZvcmNlLCAwKSwgdHJ1ZSk7XHJcblxyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnJpZ2lkQm9keS5saW5lYXJWZWxvY2l0eS54KTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5rZXkudXAgJiYgdGhpcy5yaWdpZEJvZHkubGluZWFyVmVsb2NpdHkueSA8IHRoaXMudmVydGljYWxWbWF4KSB7XHJcbiAgICAgICAgICAgIHRoaXMucmlnaWRCb2R5LmFwcGx5Rm9yY2VUb0NlbnRlcihuZXcgY2MuVmVjMigwLCB0aGlzLnVwZm9yY2UpLCB0cnVlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG9uRGVzdHJveSgpIHtcclxuICAgICAgICAvLyBDYW5jZWwga2V5Ym9hcmQgaW5wdXQgbW9uaXRvcmluZ1xyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9mZihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX0RPV04sIHRoaXMub25LZXlEb3duLCB0aGlzKTtcclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vZmYoY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9VUCwgdGhpcy5vbktleVVwLCB0aGlzKTtcclxuICAgIH1cclxufVxyXG4iXX0=