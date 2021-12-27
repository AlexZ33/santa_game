/*
 * @Author: your name
 * @Date: 2021-12-27 15:24:41
 * @LastEditTime: 2021-12-27 15:30:49
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /santa_game/src/components/animations.ts
 * @Reference: https://github.com/yandeu/phaser3-multiplayer-with-physics/blob/master/src/client/components/animations.ts
 */
const SKINS = {
    DUDE: 0,
    BOX: 1,
    STAR: 2,
    MUMMY: 3
}

export const createDudeAnimations = (scene: Phaser.Scene) => {
    scene.anims.create({
      key: 'left',
      frames: scene.anims.generateFrameNumbers(SKINS.DUDE.toString(), { start: 0, end: 3 }),
      frameRate: 10,
      repeat: -1
    })
  
    scene.anims.create({
      key: 'idle',
      frames: [{ key: SKINS.DUDE.toString(), frame: 4 }],
      frameRate: 20
    })
  
    scene.anims.create({
      key: 'right',
      frames: scene.anims.generateFrameNumbers(SKINS.DUDE.toString(), { start: 5, end: 8 }),
      frameRate: 10,
      repeat: -1
    })
  }
  
  export const setDudeAnimation = (sprite: Phaser.GameObjects.Sprite, animation: string = 'idle') => {
    if (!sprite.anims.isPlaying) sprite.play(animation)
    else if (sprite.anims.isPlaying && sprite.anims.getName() !== animation) sprite.play(animation)
  }
  
  export const createMummyAnimation = (scene: Phaser.Scene) => {
    scene.anims.create({
      key: 'walk',
      frames: scene.anims.generateFrameNumbers(SKINS.MUMMY.toString(), {}),
      frameRate: 16,
      repeat: 7
    })
  }
  
  export const setMummyAnimation = (sprite: Phaser.GameObjects.Sprite, direction: string) => {
    if (!sprite.anims.isPlaying) sprite.anims.play('walk')
    let flipX = direction === 'left' ? true : false
    sprite.setFlipX(flipX)
  }