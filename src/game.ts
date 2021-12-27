/*
 * @Author: your name
 * @Date: 2021-12-24 11:23:38
 * @LastEditTime: 2021-12-27 15:27:43
 * @LastEditors: Please set LastEditors
 * @Description: 
 * Reference : https://github.com/digitsensitive/phaser3-typescript/blob/master/slides/cheatsheets/core/game.md
 * @FilePath: /santa_game/src/main.ts
 */
import * as Phaser from 'phaser';
import  {MainScene } from './scenes/mainScene';
import resize from './components/resize'
import FullScreenEvent from './components/fullscreenEvent';

import { GameConfig } from './config';


/**
 *The Main Controller of the Game
 *Handles booting, parsing the configuration values, creating the Renderer and setup global Phaser Systems (f.e. input)
 * When loaded, starts Scene Manager and the loop begins
 * @export
 * @class Gamel
 * @extends {Phaser.Game}
 */
export class Game extends Phaser.Game {
    public readonly mainScene: MainScene;
    
    constructor( config: Phaser.Types.Core.GameConfig) {
         //We use Phaser's config object to create the game, since this is the only way to disable debugging
        super(config);

         console.log('Game Class config', config)
        if(!config.backgroundColor) {
            config.backgroundColor = 0xeeeeee;
        }
    }
}


// when the page is load, create our game instance
window.addEventListener('load', () => {

    if(window.innerWidth && window.innerHeight){
        // X 375 x 812 (635)     // XR 414 x 896     // nexus 412 x 732     // note9 360 x 740     // Max : 768 x 1024
        const MAX_HEIGHT = 800;
        //const MAX_WIDTH = 768;
        //config.width = window.innerWidth < MAX_WIDTH ? window.innerWidth : MAX_WIDTH;  
        GameConfig.height = window.innerHeight < MAX_HEIGHT ? window.innerHeight : MAX_HEIGHT;  
      }
      
    const game = new Game(GameConfig);

    window.addEventListener('resize', () => {
        resize(game)
    })

    FullScreenEvent(() => resize(game))

    resize(game)
})

console.dir(Phaser)