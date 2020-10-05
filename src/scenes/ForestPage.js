import Phaser from 'phaser';
import logoImg from "../assets/logo.png";


export default class ForestPage extends Phaser.Scene {
    constructor() {
        super({key:"Forest"});
    }
    preload(){
        this.load.image("logo", logoImg);

    }
    create(){

        const logo = this.add.image(400, 250, "logo");
    }
}


