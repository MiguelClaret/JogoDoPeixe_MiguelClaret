var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,

    scene: {
        preload: preaload,
        create: create,
        update: update

    }
};

var game = new Phaser.Game(config);

var peixinho;

function preaload() {
    this.load.image('mar', 'assets/bg_azul-claro.png');

    this.load.image('logo', 'assets/logo-inteli_branco.png');

    this.load.image('peixe', 'assets/peixes/baiacu.png');

    this.load.image('tartaruga', 'assets/peixes/tartaruga.png');

}

function create() {
    this.add.image(400, 300, 'mar');

    this.add.image(400, 525, 'logo').setScale(0.5);

    this.add.image(400, 590, 'tartaruga').setScale(0.5);

    peixinho = this.add.image(400, 300, 'peixe');

    
}

function update() {

    peixinho.x = this.input.x;
    peixinho.y = this.input.y;
}