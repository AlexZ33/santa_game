/*
 * @Author: your name
 * @Date: 2021-12-27 14:33:22
 * @LastEditTime: 2021-12-27 14:41:43
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /santa_game/src/objects/fpsText.ts
 * @Reference: https://github.com/yandeu/phaser-project-template/blob/master/src/scripts/objects/fpsText.ts
 */

export default class FpsText extends Phaser.GameObjects.Text {
    constructor (scene: any) {
        super(scene, 10,10, '', { color: 'black', fontSize: '28px'})
        scene.add.existing(this)
        this.setOrigin(0)
    }

    public update() {
        this.setText(`fps: ${Math.floor(this.scene.game.loop.actualFps)}`)
    }
}