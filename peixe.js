var config = {

    //Definição automatica da renderização com base no navegador
    type: Phaser.AUTO,
    width: 800, // indica largura da tela do game
    height: 600, // indica a altura da tela do game

    // Define as funções que serão executadas durante o jogo
    scene: {
        preload: preaload,
        create: create,
        update: update

    },

    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
};
// defini a variável game e "guarda" nela as configurações que colocamos no config
var game = new Phaser.Game(config);
// defini a variável do peixe
var peixinho, peixinho2;

//função qual carrega os recursos do game
function preaload() {
    this.load.image('mar1', 'assets/bg_azul-claro.png'); // add o arquivo do fundo do mar

    this.load.image('mar2', 'assets/bg_azul-escuro.png');

    this.load.image('logo', 'assets/logo-inteli_branco.png'); // add o arquivo da log

    this.load.image('peixeBaiacu', 'assets/peixes/baiacu.png'); // add o arquivo do peixe

    this.load.image('peixeRosa', 'assets/peixes/peixinho_azul.png');// add o arquivo do peixe

    this.load.image('tartaruga', 'assets/peixes/tartaruga.png'); // add o arquivo da tartaruga

}
// função qual criamos/colocamos na tela os elementos do game
function create() {



    this.add.image(400, 525, 'logo').setScale(0.5); // add a logo e defini seu lugar

    this.add.image(400, 590, 'tartaruga').setScale(0.5); // add a tartaruga e defini seu lugar

    if (game.device.os.desktop) {
        peixinho = this.add.image(400, 300, 'peixeRosa');
    } else {

        peixinho2 = this.add.image(400, 300, 'peixeBaiacu');
    }

    game.scale.on('orientationchange', function (orientation) {
        if (orientation === Phaser.Scale.PORTRAIT) {
            console.log('PORTRAIT')
        }
        if (orientation === Phaser.Scale.LANDSCAPE) {
            console.log('LANDSCAPE')
        }
    });

}
// função qual fica em looping durante todo o game
function update() {

    peixinho.x = this.input.x; // código qual diz para o peixe seguir o eixo x do mouse
    peixinho.y = this.input.y; // código qual diz para o peixe seguir o eixo y do mouse

    peixinho2.x = this.input.x; // código qual diz para o peixe seguir o eixo x do mouse
    peixinho2.y = this.input.y;
    
    // verificação da orientação do dispositivo
    if (game.scale.orientation === Phaser.Scale.LANDSCAPE) {
        this.add.image(400, 300, 'mar1');
    } else if (game.scale.orientation === Phaser.Scale.PORTRAIT) {
        this.add.image(400, 300, 'mar2');
    }

}