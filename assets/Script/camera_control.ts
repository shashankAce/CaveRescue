
const { ccclass, property } = cc._decorator;

@ccclass
export default class CameraControl extends cc.Component {

    @property(cc.Node)
    jet: cc.Node = null;

    gameSize = cc.v2(640, 960);

    @property(cc.TiledMap) map: cc.TiledMap = null;

    mapSize: cc.Size = null;
    tileSize: cc.Size = null;

    start() {
        this.mapSize = this.map.getMapSize();
        this.tileSize = this.map.getTileSize();
    }

    update(dt) {
        this.followJet(dt);
    }

    followJet(dt) {
        let targetPos = this.jet.getPosition();
        //targetPos.x = cc.misc.clampf(targetPos.x, -this.tileSize.width, (this.mapSize.width * this.tileSize.width) / 2 + this.tileSize.width);

        let currentPos = this.node.getPosition();
        currentPos.lerp(targetPos, 0.2, currentPos);
        this.node.setPosition(currentPos);
    }
}
