import * as Phaser from 'phaser';
/*
 * @Author: your name
 * @Date: 2021-12-24 14:17:37
 * @LastEditTime: 2021-12-27 11:46:29
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /santa_game/src/helpers.ts
 */

/* ************************************************
** GAME HELPER FUNCTIONS
************************************************ */
import  {Scene} from 'phaser';

export const getGameWidth = (scene: Scene) : number => {
    return scene.game.scale.width;
}

export const geGameHeight = (scene: Scene): number => {
    return scene.game.scale.height
}