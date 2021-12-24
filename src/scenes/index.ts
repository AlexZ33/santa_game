import * as Phaser from 'phaser';
/*
 * @Author: your name
 * @Date: 2021-12-24 14:05:59
 * @LastEditTime: 2021-12-24 15:23:11
 * @LastEditors: Please set LastEditors
 * @Description: scene框架: https://github.com/digitsensitive/phaser3-typescript/blob/master/slides/cheatsheets/scene/scene.md
 * @FilePath: /santa_game/src/scenes/index.ts
 */

export class MainScene extends Phaser.Scene {
    private phaserSprite: Phaser.GameObjects.Sprite;

    // 变量

    constructor() {
        super({
            key: 'MainScene'
        });
    }
    
    // Use it to define f.e. variables
   // Called first by the Scene Manager when the scene starts  
    init() : void {
        
    }

    // Use it to load assets
    peload(): void {
        // 加载资源

    }
    
    // Use it to create your game objects
    create(): void {

    }
    
    // Should be overridden by your scene
    // Called once per game step while the scene is running
    update(time: number, delta: number): void {}
}