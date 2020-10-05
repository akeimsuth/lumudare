import Phaser from "phaser";
import GameScene from './scenes/GameScene'
import ForestPage from './scenes/GameScene'
import config from './config/config'


class Game extends Phaser.Game{
  constructor(){
    super(config);
    this.scene.add('Game',GameScene);
    this.scene.start('Game');
    
  }
}

// class Forest extends Phaser.Game{
//   constructor(){
//     super(config);
//     this.scene.add('Forest',ForestPage);
//     this.scene.start('Forest');
//   }
// }

window.onload = function(){
  window.game = new Game();
}

// function preload() {
//   this.load.image("logo", logoImg);
//   this.load.image("puppet", puppet);
//   this.load.image("puppetChat", puppetChat);
// }

// function create() {
//   const logo = this.add.image(400, 250, "logo");
//   const puppetChat = this.add.image(400, 250, "puppetChat");
//   const sprite = this.add.sprite(400, 250, "puppet");
  // this.tweens.add({
  //   targets: logo,
  //   y: 450,
  //   duration: 2000,
  //   ease: "Power2",
  //   yoyo: true,
  //   loop: -1
  // });
//}
