let config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: [ //Phase will load the first scene but not the others
        BootScene,
        GameScene,
    ],
    physics: {
        default: 'arcade',
        arcade: {
            debug: true, //set objects outline and pointers where objects are headed to
            gravity: {
                y: 0, //direction of the gravity plus value of strength
            }
        }
    }
}

let game = new Phaser.Game(config);
let clientID;
let playerList=[];

let socket = io.connect();
socket.on('id',(data)=>{
clientID=data;
})



