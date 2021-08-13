
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
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.force = 2000;
        _this.upforce = 2000;
        _this.velocityMax = 300;
        _this.upVelocityMax = 200;
        _this.direction = 0;
        _this.key = { up: false, right: false, left: false };
        return _this;
    }
    NewClass.prototype.onLoad = function () {
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
        this.rigidBody = this.getComponent(cc.RigidBody);
    };
    NewClass.prototype.onKeyDown = function (event) {
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
    NewClass.prototype.onKeyUp = function (event) {
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
    NewClass.prototype.changeShipAngle = function (angle) {
        cc.tween(this.node)
            .to(0.2, { angle: angle })
            .start();
    };
    NewClass.prototype.start = function () {
        this.rigidBody.fixedRotation = true;
        // this.rigidBody.enabledContactListener = true;
    };
    NewClass.prototype.update = function (dt) {
        if (this.key.left && this.rigidBody.linearVelocity.x > -this.velocityMax) {
            this.rigidBody.applyForceToCenter(new cc.Vec2(-1 * this.force, 0), true);
            // console.log(this.rigidBody.linearVelocity.x);
        }
        if (this.key.right && this.rigidBody.linearVelocity.x < this.velocityMax) {
            this.rigidBody.applyForceToCenter(new cc.Vec2(1 * this.force, 0), true);
            // console.log(this.rigidBody.linearVelocity.x);
        }
        if (this.key.up && this.rigidBody.linearVelocity.y < this.upVelocityMax) {
            this.rigidBody.applyForceToCenter(new cc.Vec2(0, this.upforce), true);
        }
    };
    NewClass.prototype.onDestroy = function () {
        // Cancel keyboard input monitoring
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    };
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QztJQUVELDRCQUFTLEdBQVQ7UUFDSSxtQ0FBbUM7UUFDbkMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDNUUsRUFBRSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDNUUsQ0FBQztJQTlGZ0IsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQStGNUI7SUFBRCxlQUFDO0NBL0ZELEFBK0ZDLENBL0ZxQyxFQUFFLENBQUMsU0FBUyxHQStGakQ7a0JBL0ZvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgcmlnaWRCb2R5OiBjYy5SaWdpZEJvZHk7XG5cbiAgICBmb3JjZTogbnVtYmVyID0gMjAwMDtcbiAgICB1cGZvcmNlOiBudW1iZXIgPSAyMDAwO1xuXG4gICAgdmVsb2NpdHlNYXg6IG51bWJlciA9IDMwMDtcbiAgICB1cFZlbG9jaXR5TWF4OiBudW1iZXIgPSAyMDA7XG5cbiAgICBkaXJlY3Rpb246IG51bWJlciA9IDA7XG4gICAga2V5OiB7IHVwOiBib29sZWFuLCByaWdodDogYm9vbGVhbiwgbGVmdDogYm9vbGVhbiB9ID0geyB1cDogZmFsc2UsIHJpZ2h0OiBmYWxzZSwgbGVmdDogZmFsc2UgfTtcblxuICAgIG9uTG9hZCgpIHtcblxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vbihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX0RPV04sIHRoaXMub25LZXlEb3duLCB0aGlzKTtcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub24oY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9VUCwgdGhpcy5vbktleVVwLCB0aGlzKTtcblxuICAgICAgICB0aGlzLnJpZ2lkQm9keSA9IHRoaXMuZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSk7XG5cbiAgICB9XG5cbiAgICBvbktleURvd24oZXZlbnQ6IGNjLkV2ZW50LkV2ZW50S2V5Ym9hcmQpIHtcbiAgICAgICAgc3dpdGNoIChldmVudC5rZXlDb2RlKSB7XG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS51cDpcbiAgICAgICAgICAgICAgICB0aGlzLmtleS51cCA9IHRydWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLnJpZ2h0OlxuICAgICAgICAgICAgICAgIHRoaXMua2V5LnJpZ2h0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVNoaXBBbmdsZSgtMzApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5sZWZ0OlxuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlU2hpcEFuZ2xlKDMwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmtleS5sZWZ0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uS2V5VXAoZXZlbnQ6IGNjLkV2ZW50LkV2ZW50S2V5Ym9hcmQpIHtcbiAgICAgICAgc3dpdGNoIChldmVudC5rZXlDb2RlKSB7XG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS51cDpcbiAgICAgICAgICAgICAgICB0aGlzLmtleS51cCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkucmlnaHQ6XG4gICAgICAgICAgICAgICAgdGhpcy5rZXkucmlnaHQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVNoaXBBbmdsZSgwKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLmxlZnQ6XG4gICAgICAgICAgICAgICAgdGhpcy5rZXkubGVmdCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlU2hpcEFuZ2xlKDApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2hhbmdlU2hpcEFuZ2xlKGFuZ2xlOiBudW1iZXIpIHtcblxuICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUpXG4gICAgICAgICAgICAudG8oMC4yLCB7IGFuZ2xlOiBhbmdsZSB9KVxuICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgfVxuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIHRoaXMucmlnaWRCb2R5LmZpeGVkUm90YXRpb24gPSB0cnVlO1xuICAgICAgICAvLyB0aGlzLnJpZ2lkQm9keS5lbmFibGVkQ29udGFjdExpc3RlbmVyID0gdHJ1ZTtcbiAgICB9XG5cbiAgICB1cGRhdGUoZHQpIHtcblxuICAgICAgICBpZiAodGhpcy5rZXkubGVmdCAmJiB0aGlzLnJpZ2lkQm9keS5saW5lYXJWZWxvY2l0eS54ID4gLXRoaXMudmVsb2NpdHlNYXgpIHtcbiAgICAgICAgICAgIHRoaXMucmlnaWRCb2R5LmFwcGx5Rm9yY2VUb0NlbnRlcihuZXcgY2MuVmVjMigtMSAqIHRoaXMuZm9yY2UsIDApLCB0cnVlKTtcblxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5yaWdpZEJvZHkubGluZWFyVmVsb2NpdHkueCk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmtleS5yaWdodCAmJiB0aGlzLnJpZ2lkQm9keS5saW5lYXJWZWxvY2l0eS54IDwgdGhpcy52ZWxvY2l0eU1heCkge1xuICAgICAgICAgICAgdGhpcy5yaWdpZEJvZHkuYXBwbHlGb3JjZVRvQ2VudGVyKG5ldyBjYy5WZWMyKDEgKiB0aGlzLmZvcmNlLCAwKSwgdHJ1ZSk7XG5cbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMucmlnaWRCb2R5LmxpbmVhclZlbG9jaXR5LngpO1xuXG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5rZXkudXAgJiYgdGhpcy5yaWdpZEJvZHkubGluZWFyVmVsb2NpdHkueSA8IHRoaXMudXBWZWxvY2l0eU1heCkge1xuICAgICAgICAgICAgdGhpcy5yaWdpZEJvZHkuYXBwbHlGb3JjZVRvQ2VudGVyKG5ldyBjYy5WZWMyKDAsIHRoaXMudXBmb3JjZSksIHRydWUpO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBvbkRlc3Ryb3koKSB7XG4gICAgICAgIC8vIENhbmNlbCBrZXlib2FyZCBpbnB1dCBtb25pdG9yaW5nXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9mZihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX0RPV04sIHRoaXMub25LZXlEb3duLCB0aGlzKTtcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub2ZmKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfVVAsIHRoaXMub25LZXlVcCwgdGhpcyk7XG4gICAgfVxufVxuIl19