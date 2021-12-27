/*
 * @Author: your name
 * @Date: 2021-12-27 14:04:05
 * @LastEditTime: 2021-12-27 14:06:32
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /santa_game/src/const/privateConfig.ts
 */

declare type santaConfig = {
    
     /**
     * grid columns
     */
      w: number,
      /**
       * grid rows
       */
      h: number,
      /**
       * grid circle radius
       */
      r: number,
      /**
       * The background color of the game canvas. The default is black.
       */
      backgroundColor?: string | number;
      /**
       * The DOM element that will contain the game canvas, or its `id`. If null (the default) or if the named element doesn't exist, the game canvas is inserted directly into the document body.
       */
      parent?: HTMLElement | string;
      /**
       * 'left' or 'center'
       */
      statusBarAlign?: string;
      /**
       * text at bottom right corner
       */
      credit?: string;
      zoom?: string | number;
}