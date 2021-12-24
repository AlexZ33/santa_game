/*
 * @Author: your name
 * @Date: 2021-12-24 14:35:22
 * @LastEditTime: 2021-12-24 16:13:05
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /santa_game/src/config.ts
 */

export const GameConfig: Phaser.Types.Core.GameConfig = {
    type: Phaser.AUTO, // canvas
    title: '',
    url: '',
    zoom: 0.6,
    scene: [],  // 设置场景
    input: {
        keyboard: true,
        mouse: true,
        touch: true,
        gamepad: false,
        activePointers: 1
    },
    physics: {
        // 添加物理引擎
        default: 'arcade',
        arcade: {
            gravity: { y: 1300},
            debug: true
        },
        
    }
}