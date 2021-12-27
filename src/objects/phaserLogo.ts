/*
 * @Author: your name
 * @Date: 2021-12-27 14:42:58
 * @LastEditTime: 2021-12-27 14:46:22
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /santa_game/src/objects/phaserLogo.ts
 * @Reference: https://github.com/yandeu/phaser-project-template/blob/master/src/scripts/objects/phaserLogo.ts
 */
export default class PhaserLogo extends Phaser.Physics.Arcade.Sprite {
    constructor(scene: any, x: number, y:  number) {
      super(scene, x, y, 'phaser-logo')
      scene.add.existing(this)
      scene.physics.add.existing(this)
  
      this.setCollideWorldBounds(true)
        .setBounce(0.6)
        .setInteractive()
        .on('pointerdown', () => {
          this.setVelocityY(-400)
        })
    }
  }
  