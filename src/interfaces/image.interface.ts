/*
 * @Author: your name
 * @Date: 2021-12-24 14:09:47
 * @LastEditTime: 2021-12-24 14:12:07
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /santa_game/src/interfaces/image.interface.ts
 */
export interface IImageConstructor {
    scene: Phaser.Scene;
    x: number,
    y: number;
    texture: string | Phaser.Textures.Texture;
    frame?: string | number;
}