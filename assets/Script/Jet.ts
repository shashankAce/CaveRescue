
const { ccclass, property } = cc._decorator;

@ccclass
export default class Jet extends cc.Component {

    rigidBody: cc.RigidBody;

    force: number = 500;
    upforce: number = 2000;

    horizontalVmax: number = 300;
    verticalVmax: number = 200;

    direction: number = 0;
    key: { up: boolean, right: boolean, left: boolean } = { up: false, right: false, left: false };

    onLoad() {

        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);

        this.rigidBody = this.getComponent(cc.RigidBody);

    }

    onKeyDown(event: cc.Event.EventKeyboard) {
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
    }

    onKeyUp(event: cc.Event.EventKeyboard) {
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
    }

    changeShipAngle(angle: number) {

        cc.tween(this.node)
            .to(0.2, { angle: angle })
            .start();
    }

    start() {
        this.rigidBody.fixedRotation = true;
        // this.rigidBody.enabledContactListener = true;
    }

    update(dt) {

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

    }

    onDestroy() {
        // Cancel keyboard input monitoring
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    }
}
