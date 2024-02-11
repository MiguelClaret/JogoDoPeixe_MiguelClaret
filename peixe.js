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

    }
};
// defini a variável game e "guarda" nela as configurações que colocamos no config
var game = new Phaser.Game(config);
// defini a variável do peixe
var peixinho;
 
//função qual carrega os recursos do game
function preaload() { 
    this.load.image('mar', 'assets/bg_azul-claro.png'); // add o arquivo do fundo do mar

    this.load.image('logo', 'assets/logo-inteli_branco.png'); // add o arquivo da log

    this.load.image('peixe', 'assets/peixes/baiacu.png'); // add o arquivo do peixe

    this.load.image('tartaruga', 'assets/peixes/tartaruga.png'); // add o arquivo da tartaruga

}
 // função qual criamos/colocamos na tela os elementos do game
function create() {
    this.add.image(400, 300, 'mar'); // add o fundo

    this.add.image(400, 525, 'logo').setScale(0.5); // add a logo e defini seu lugar

    this.add.image(400, 590, 'tartaruga').setScale(0.5); // add a tartaruga e defini seu lugar

    peixinho = this.add.image(400, 300, 'peixe'); // add o peixe e defini seu spaw

    
}
 // função qual fica em looping durante todo o game
function update() {

    peixinho.x = this.input.x; // código qual diz para o peixe seguir o eixo x do mouse
    peixinho.y = this.input.y; // código qual diz para o peixe seguir o eixo y do mouse
}