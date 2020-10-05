import Phaser, { Scene, Scenes } from 'phaser';
import logoImg from "../assets/trees.jpg";
import puppet from "../assets/puppet.png";
import puppetChat from "../assets/puppetChat.png";
import witch from "../assets/witch.png";
import witchChat from "../assets/witchChat.png";
import pumpkin from "../assets/pumpkin.png";
import pumpkinChat from "../assets/pumpkinChat.png";
import wolf from "../assets/wolf.png";
import wolfChat from "../assets/wolfChat.png";
import girl from "../assets/girl.png";
import arrow from "../assets/arrow.png";
import arrow1 from "../assets/arrow.png";
import arrow2 from "../assets/arrow.png";

//sounds
// import pumpkinSound from "../assets/Pumpkin.wav";
// import wolfSound from "../assets/wolf.wav";
// import puppetSound from "../assets/puppet.wav";
 //import witchSound from "../assets/witch.mp3";
 import bgMusic from "../assets/bg.mp3";



export default class GameScene extends Phaser.Scene {
    constructor() {
        super('Game');
    }
    preload(){
        const cursors = this.input.keyboard.createCursorKeys()
        this.load.image("logo", logoImg);
        this.load.image("girl", girl);
        this.load.image("arrow", arrow);
        this.load.image("arrow1", arrow1);
        this.load.image("arrow2", arrow2);
        this.load.audio("sound",bgMusic);

    }


    create(){

        var music = this.sound.add("sound");
        const logo = this.add.image(400, 250, "logo");
        this.image = this.add.image(400, 250, "girl");
        this.button = this.add.image(100, 270, "arrow");
        this.button.setScale(0.2);
        this.button.setAngle(180);
        music.play();


        const self = this;
        this.button.setInteractive();
        this.button.on('pointerup',function(pointer){
                self.scene.add("Puppet",PuppetScene, true, { x: 400, y: 300 });
                self.scene.remove();
                
        })

     
        this.button1 = this.add.image(700, 270, "arrow1");
        this.button1.setScale(0.2);
        this.button1.setInteractive();

        this.button1.on('pointerup',function(pointer){
            self.scene.add("Witch",WitchScene, true, { x: 400, y: 300 });
            self.scene.remove();
            
        })

        this.button2 = this.add.image(400, 550, "arrow2");
        this.button2.setScale(0.2);
        this.button2.setAngle(90)
        this.button2.setInteractive();

        this.button2.on('pointerup',function(pointer){
            self.scene.add("Pumpkin",PumpkinScene, true, { x: 400, y: 300 });
            self.scene.remove();
            
        })
            
     
       

        } 

     



        // this.key_A = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A)
        // this.key_D = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D)
        // this.key_W = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W)
        // this.key_S = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S)
    


}


export class PuppetScene extends Phaser.Scene {
    constructor() {
        super("Puppet");
    }
  
    preload(){
        this.load.image("logo", logoImg);
        this.load.image("puppet", puppet);
        this.load.image("puppetChat", puppetChat);
        //this.load.image("girl", girl);
        this.load.image("arrow1", arrow1);
      
    }
    create(){

        const logo = this.add.image(400, 250, "logo");
        const puppetChat = this.add.image(400, 250, "puppetChat");
        const puppet = this.add.sprite(400, 250, "puppet");
        //const sprite1 = this.add.image(400, 50, "girl");
   
    
        const self = this;
        this.button1 = this.add.image(750, 270, "arrow1");
        this.button1.setScale(0.2);
        this.button1.setInteractive();

        this.button1.on('pointerup',function(pointer){
            self.scene.add("Game",GameScene, true, { x: 400, y: 300 });
            self.scene.remove();
        })

        this.button3 = this.add.image(400, 50, "arrow1");
        this.button3.setScale(0.2);
        this.button3.setAngle(270);
        this.button3.setInteractive();

        this.button3.on('pointerup',function(pointer){
            self.scene.add("wolf",WolfScene, true, { x: 400, y: 300 });
            self.scene.remove();
            
        })

        // this.input.on('pointerup', function (pointer) {
        //     //console.log("Clicked");
        //     this.scene.add("Game",GameScene, true, { x: 400, y: 300 });
        //     this.scene.remove();
        // }, this);
        
    }

}

export class WitchScene extends Phaser.Scene {
    constructor() {
        super("Witch");
    }
  
    preload(){
        this.load.image("logo", logoImg);
        this.load.image("witch", witch);
        this.load.image("witchChat", witchChat);
        //this.load.image("girl", girl);
        this.load.image("arrow1", arrow1);
    }
    create(){

        const logo = this.add.image(400, 250, "logo");
        const witchChat = this.add.image(400, 250, "witchChat");
        const witch = this.add.sprite(400, 250, "witch");
        //const sprite1 = this.add.image(400, 50, "girl");

        const self = this;
        this.button1 = this.add.image(750, 270, "arrow1");
        this.button1.setScale(0.2);
        this.button1.setInteractive();

        this.button1.on('pointerup',function(pointer){
            self.scene.add("puppet",PuppetScene, true, { x: 400, y: 300 });
            self.scene.remove();
            
        })

        this.button3 = this.add.image(400, 50, "arrow1");
        this.button3.setScale(0.2);
        this.button3.setAngle(270);
        this.button3.setInteractive();

        this.button3.on('pointerup',function(pointer){
            self.scene.add("puppet",PuppetScene, true, { x: 400, y: 300 });
            self.scene.remove();
            
        })

        this.input.on('pointerup', function (pointer) {
            //console.log("Clicked");
            this.scene.add("Game",GameScene, true, { x: 400, y: 300 });
            this.scene.remove();
        }, this);
        
    }

}

export class PumpkinScene extends Phaser.Scene {
    constructor() {
        super("Pumpkin");
    }
  
    preload(){
        this.load.image("logo", logoImg);
        this.load.image("pumpkin", pumpkin);
        this.load.image("pumpkinChat", pumpkinChat);
        //this.load.image("girl", girl);
        this.load.image("arrow1", arrow1);
    }
    create(){
    
        const logo = this.add.image(400, 250, "logo");
        const pumpkinChat = this.add.image(400, 250, "pumpkinChat");
        const pumpkin = this.add.sprite(400, 250, "pumpkin");
        //const sprite1 = this.add.image(400, 50, "girl");
        const self = this;
        this.button1 = this.add.image(750, 270, "arrow1");
        this.button1.setScale(0.2);
        this.button1.setInteractive();

        this.button1.on('pointerup',function(pointer){
            self.scene.add("Witch",WitchScene, true, { x: 400, y: 300 });
            self.scene.remove();
            
        })

        this.button3 = this.add.image(400, 50, "arrow1");
        this.button3.setScale(0.2);
        this.button3.setAngle(270);
        this.button3.setInteractive();

        this.button3.on('pointerup',function(pointer){
            self.scene.add("wolf",WolfScene, true, { x: 400, y: 300 });
            self.scene.remove();
            
        })

        
    }

}

export class WolfScene extends Phaser.Scene {
    constructor() {
        super("Wolf");
    }
  
    preload(){
        this.load.image("logo", logoImg);
        this.load.image("wolf", wolf);
        this.load.image("wolfChat", wolfChat);
        //this.load.image("girl", girl);
        this.load.image("arrow1", arrow1);
    }
    create(){
    
        const logo = this.add.image(400, 250, "logo");
        const wolfChat = this.add.image(400, 250, "wolfChat");
        const wolf = this.add.sprite(400, 250, "wolf");
        //const sprite1 = this.add.image(400, 50, "girl");
        const self = this;
        this.button1 = this.add.image(750, 270, "arrow1");
        this.button1.setScale(0.2);
        this.button1.setInteractive();

        this.button1.on('pointerup',function(pointer){
            self.scene.add("Witch",WitchScene, true, { x: 400, y: 300 });
            self.scene.remove();
            
        })


        this.button3 = this.add.image(400, 50, "arrow1");
        this.button3.setScale(0.2);
        this.button3.setAngle(270);
        this.button3.setInteractive();

        this.button3.on('pointerup',function(pointer){
            self.scene.add("Game",GameScene, true, { x: 400, y: 300 });
            self.scene.remove();
            
        })

        
    }

}


