
const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    gravity: number = -300;

    onLoad() {
        var physics_manager = cc.director.getPhysicsManager();
        physics_manager.enabled = true;
        physics_manager.debugDrawFlags = 1;
        physics_manager.gravity = cc.v2(0, this.gravity);

    }

    start() {

    }

    // update (dt) {}
}
