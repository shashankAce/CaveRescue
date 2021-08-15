const { ccclass, property } = cc._decorator;

@ccclass
export default class Menu extends cc.Component {
    
    start() {
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
    }
}
