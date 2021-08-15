
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Menu.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e1b90/rohdEk4SdmmEZANaD', 'Menu');
// Script/Menu.ts

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
var Menu = /** @class */ (function (_super) {
    __extends(Menu, _super);
    function Menu() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Menu.prototype.start = function () {
        // init logic
        // this.label.string = this.text;
        cc.director.getPhysicsManager().enabledAccumulator = true;
        // Physics timestep, default FIXED_TIME_STEP is 1/60
        cc.PhysicsManager.FIXED_TIME_STEP = 1 / 60;
        // The number of iterations per update of the Physics System processing speed is 10 by default
        cc.PhysicsManager.VELOCITY_ITERATIONS = 8;
        // The number of iterations per update of the Physics processing location is 10 by default
        cc.PhysicsManager.POSITION_ITERATIONS = 8;
        // cc.game.setFrameRate(61);
        cc.director.loadScene('Game');
    };
    Menu = __decorate([
        ccclass
    ], Menu);
    return Menu;
}(cc.Component));
exports.default = Menu;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxNZW51LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQWtDLHdCQUFZO0lBQTlDOztJQW1CQSxDQUFDO0lBakJHLG9CQUFLLEdBQUw7UUFDSSxhQUFhO1FBQ2IsaUNBQWlDO1FBQ2pDLEVBQUUsQ0FBQyxRQUFRLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUM7UUFFMUQsb0RBQW9EO1FBQ3BELEVBQUUsQ0FBQyxjQUFjLENBQUMsZUFBZSxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUM7UUFFM0MsOEZBQThGO1FBQzlGLEVBQUUsQ0FBQyxjQUFjLENBQUMsbUJBQW1CLEdBQUcsQ0FBQyxDQUFDO1FBRTFDLDBGQUEwRjtRQUMxRixFQUFFLENBQUMsY0FBYyxDQUFDLG1CQUFtQixHQUFHLENBQUMsQ0FBQztRQUUxQyw0QkFBNEI7UUFDNUIsRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQWxCZ0IsSUFBSTtRQUR4QixPQUFPO09BQ2EsSUFBSSxDQW1CeEI7SUFBRCxXQUFDO0NBbkJELEFBbUJDLENBbkJpQyxFQUFFLENBQUMsU0FBUyxHQW1CN0M7a0JBbkJvQixJQUFJIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lbnUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICAvLyBpbml0IGxvZ2ljXHJcbiAgICAgICAgLy8gdGhpcy5sYWJlbC5zdHJpbmcgPSB0aGlzLnRleHQ7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IuZ2V0UGh5c2ljc01hbmFnZXIoKS5lbmFibGVkQWNjdW11bGF0b3IgPSB0cnVlO1xyXG5cclxuICAgICAgICAvLyBQaHlzaWNzIHRpbWVzdGVwLCBkZWZhdWx0IEZJWEVEX1RJTUVfU1RFUCBpcyAxLzYwXHJcbiAgICAgICAgY2MuUGh5c2ljc01hbmFnZXIuRklYRURfVElNRV9TVEVQID0gMSAvIDYwO1xyXG5cclxuICAgICAgICAvLyBUaGUgbnVtYmVyIG9mIGl0ZXJhdGlvbnMgcGVyIHVwZGF0ZSBvZiB0aGUgUGh5c2ljcyBTeXN0ZW0gcHJvY2Vzc2luZyBzcGVlZCBpcyAxMCBieSBkZWZhdWx0XHJcbiAgICAgICAgY2MuUGh5c2ljc01hbmFnZXIuVkVMT0NJVFlfSVRFUkFUSU9OUyA9IDg7XHJcblxyXG4gICAgICAgIC8vIFRoZSBudW1iZXIgb2YgaXRlcmF0aW9ucyBwZXIgdXBkYXRlIG9mIHRoZSBQaHlzaWNzIHByb2Nlc3NpbmcgbG9jYXRpb24gaXMgMTAgYnkgZGVmYXVsdFxyXG4gICAgICAgIGNjLlBoeXNpY3NNYW5hZ2VyLlBPU0lUSU9OX0lURVJBVElPTlMgPSA4O1xyXG5cclxuICAgICAgICAvLyBjYy5nYW1lLnNldEZyYW1lUmF0ZSg2MSk7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdHYW1lJyk7XHJcbiAgICB9XHJcbn1cclxuIl19