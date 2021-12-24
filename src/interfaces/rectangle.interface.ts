/*
 * @Author: your name
 * @Date: 2021-12-24 14:31:19
 * @LastEditTime: 2021-12-24 14:33:03
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /santa_game/src/interfaces/Rectangle.interface.ts
 */
export interface IRectangleConstructor {
    scene: Phaser.Scene;
    x: number;
    y: number;
    width?: number;
    height?: number;
    fillColor?: number;
     fillAlpha?: number;
}