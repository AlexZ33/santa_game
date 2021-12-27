/*
 * @Author: your name
 * @Date: 2021-12-27 14:50:53
 * @LastEditTime: 2021-12-27 14:50:54
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /santa_game/src/components/fullscreenEvent.ts
 * @Reference: https://github.com/yandeu/phaser3-multiplayer-with-physics/blob/master/src/client/components/fullscreenEvent.ts
 */
// listen for fullscreen change event
const FullScreenEvent = (callback: Function) => {
    const fullScreenChange = () => {
      let times = [50, 100, 200, 500, 1000, 2000, 5000]
      times.forEach(time => {
        window.setTimeout(() => {
          callback()
        }, time)
      })
    }
    var vendors = ['webkit', 'moz', 'ms', '']
    vendors.forEach(prefix => {
      document.addEventListener(prefix + 'fullscreenchange', fullScreenChange, false)
    })
    document.addEventListener('MSFullscreenChange', fullScreenChange, false)
  }
  export default FullScreenEvent