class Players extends Phaser.Physics.Arcade.Image {
    constructor(scene, x, y, key, frame) {
        super(scene, x, y, key, frame);

        this.x=x;
        this.y=y;
        
        this.scene = scene;
        this.Velocity = 160; //velocity with which the player is moving

        this.scene.physics.world.enable(this); //enables physics
        this.setImmovable(false); //sets immovable if an object collides w/ the player

        //this.setScale(2); //sets y and x values if not specified sets both
        this.setCollideWorldBounds(true); //makes the pklayer unable to exit the scene

        this.scene.add.existing(this); //adds the player to an existing scene
        this.setScale(0.9);

        let socket = io.connect();
    }

    create() {

    }

    update(posX,posY) { //updates keyboard event listener and link to cursors game object with the parameter
         this.body.setVelocity(0); //sets initial velocity for the player (body since we're in player class)


        this.x=posX;
        this.y=posY;
    }

    id(){
        return this.id
    }
}