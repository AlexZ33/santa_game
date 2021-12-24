/*
 * @Author: your name
 * @Date: 2021-12-24 11:23:38
 * @LastEditTime: 2021-12-24 16:17:08
 * @LastEditors: Please set LastEditors
 * @Description: 
 * Reference : https://github.com/digitsensitive/phaser3-typescript/blob/master/slides/cheatsheets/core/game.md
 * @FilePath: /santa_game/src/main.ts
 */
import * as Phaser from 'phaser';
import  {MainScene } from './scenes';
import {GameConfig } from './config';


/**
 *The Main Controller of the Game
 *Handles booting, parsing the configuration values, creating the Renderer and setup global Phaser Systems (f.e. input)
 * When loaded, starts Scene Manager and the loop begins
 * @export
 * @class Game
 * @extends {Phaser.Game}
 */
export class Game extends Phaser.Game {
    constructor( config: Phaser.Types.Core.GameConfig) {
        super(config);
    }
}

window.addEventListener('load', () => {

    if(window.innerWidth && window.innerHeight){
        // X 375 x 812 (635)     // XR 414 x 896     // nexus 412 x 732     // note9 360 x 740     // Max : 768 x 1024
        const MAX_HEIGHT = 800;
        //const MAX_WIDTH = 768;
        //config.width = window.innerWidth < MAX_WIDTH ? window.innerWidth : MAX_WIDTH;  
        GameConfig.height = window.innerHeight < MAX_HEIGHT ? window.innerHeight : MAX_HEIGHT;  
      }
      
    const game = new Game(GameConfig);
})

console.dir(Phaser)