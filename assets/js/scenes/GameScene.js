class GameScene extends Phaser.Scene {
    constructor() {
        super('Game');
    }

    create() {
        this.createMap();

        this.createPlayer();

        this.addCollisions();

        this.createInput();

        this.createAudio();
    }

    createMap() {
        this.map = this.make.tilemap({
            key: "map"
        });
        this.tiles = this.map.addTilesetImage("sheet2blocks", "tiles");

        this.background = this.map.createStaticLayer("background", this.tiles, 0, 0);
        this.background.setScale(1.1);

        this.walls = this.map.createStaticLayer("walls", this.tiles, 0, 0);
        this.walls.setScale(1.1);
        this.walls.setCollisionByExclusion([-1]);
    }

    createPlayer() {
        this.player = new Player(this, 50, 50, 'characters', 2);
    }

    createInput() {
        this.cursors = this.input.keyboard.createCursorKeys(); //Phaser in-built keyboard event listener
    }

    addCollisions() {
        this.physics.add.collider(this.player, this.walls); //Adds collision between said objects
    }

    createAudio() {
        this.gameMusic = this.sound.add('gameMusic', {loop: true});
        this.gameMusic.play();
    }

    update() {
        this.player.update(this.cursors); //calls the update method for the player class
    }
}