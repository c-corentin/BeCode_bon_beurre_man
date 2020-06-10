class BootScene extends Phaser.Scene {
    constructor() {
        super('Boot');
    }

    preload() {
        // IMAGES
        this.loadImages();

        // SPRITES
        this.loadSprites();

        // TILEMAP
        this.loadTileMap();
    }

   loadImages() {       
        //load the map tileset image
        this.load.image("tiles", 'assets/level/sheet2blocks.png');     

    }

    loadSprites() {

       this.load.spritesheet('characters', 'assets/images/characters.png', {
           frameWidth: 32,
           frameHeight: 32
       })
   }

    loadTileMap() {
        // load JSON file map
        this.load.tilemapTiledJSON("map", 'assets/level/mapmaison.json');
    }

    create(){
        this.scene.start('Game');
    }
}