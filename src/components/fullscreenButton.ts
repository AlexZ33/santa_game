/*
 * @Author: your name
 * @Date: 2021-12-27 15:26:25
 * @LastEditTime: 2021-12-27 15:26:26
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /santa_game/src/components/fullscreenButton.ts
 */
const fullscreenButton = (scene: Phaser.Scene) => {
    let button = scene.add
      .image(0, 0, 'fullscreen', 0)
      .setOrigin(1, 0)
      .setInteractive()
      .setScrollFactor(0)
      .setDepth(100)
  
    button.on('pointerup', () => {
      if (scene.scale.isFullscreen) {
        button.setFrame(0)
        scene.scale.stopFullscreen()
      } else {
        button.setFrame(1)
        scene.scale.startFullscreen()
      }
    })
    return button
  }
  
  export default fullscreenButton
  