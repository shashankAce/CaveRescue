
const { ccclass, property } = cc._decorator;

@ccclass
export default class Game extends cc.Component {

    gravity: number = -300;
    wall: cc.TiledLayer = null;
    gameSize = cc.v2(640, 960);

    @property(cc.TiledMap) map: cc.TiledMap = null;
    @property(cc.RigidBody) jet: cc.RigidBody = null;

    onLoad() {
        var physics_manager = cc.director.getPhysicsManager();
        physics_manager.enabled = true;
        physics_manager.debugDrawFlags = 1;
        physics_manager.gravity = cc.v2(0, this.gravity);

        this.wall = this.map.getLayers()[0];
    }

    start() {

        let mapSize = this.map.getMapSize();
        let tileSize = this.map.getTileSize();

        let x = -(mapSize.width * tileSize.width) / 2 + tileSize.width / 2;
        let y = (mapSize.height * tileSize.height) / 2 - tileSize.height / 2;

        let offset = cc.v2(x, y);

        for (let i = 0; i < mapSize.width; i++) {
            for (let j = 0; j < mapSize.height; j++) {
                let n = this.wall.getTileGIDAt(i, j);

                // If tiles are present
                if (n != 0) {

                    let x = offset.x + i * tileSize.width;
                    let y = offset.y - j * tileSize.height;

                    // Add collision box
                    let collider: cc.PhysicsBoxCollider = this.wall.node.addComponent(cc.PhysicsBoxCollider);
                    collider.offset.set(cc.v2(x, y));
                    collider.size.width = tileSize.width;
                    collider.size.height = tileSize.height;
                    collider.apply();
                }
            }
        }
    }

    // update (dt) {}
}
