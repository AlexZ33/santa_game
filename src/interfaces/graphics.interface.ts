/*
 * @Author: your name
 * @Date: 2021-12-24 14:37:35
 * @LastEditTime: 2021-12-24 15:04:01
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /santa_game/src/interfaces/graphics.interface.ts
 */
export interface ICellConstructor {
    scene: Phaser.Scene;
    x: number;
    y: number;
}

export interface IGraphicsConstructor {
    scene: Phaser.Scene;
    direction: Phaser.Math.Vector2;
    options?:Phaser.Types.GameObjects.Graphics.Options;
}