<!--
 * @Author: your name
 * @Date: 2021-12-24 10:54:54
 * @LastEditTime: 2021-12-24 17:56:14
 * @LastEditors: Please set LastEditors
 * @Description: https://github.com/jo8937/santajump
 * @FilePath: /santa_game/docs/如何用Phaser3+Typescript构建圣诞小游戏.md
-->

# 如何用Phaser3+Typescript构建圣诞小游戏

我是个前端工程师，圣诞到了我想给女朋友写个小游戏，了解前端的同学知道，实现方式选择余地很大，经过思考和调研， 我选择了使用Phaser3 作为游戏框架(现在十分流行) 选择用Typescript 作为开发语言(因为我更中意静态类型的语言)。 

废话不多说，我们开始构建项目

# 一、 环境准备

- node
- vscode


# 二、构建项目

## 1. 项目结构

```package.json
// npm init
{
  "name": "santa_game",
  "version": "1.0.0",
  "description": "A Simple Game Project For Phaser3 in Typescript",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/AlexZ33/santa_game.git"
  },
  "keywords": [
    "Phaser"
  ],
  "author": "AlexZ33",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/AlexZ33/santa_game/issues"
  },
  "homepage": "https://github.com/AlexZ33/santa_game#readme"
}

```

## 安装依赖package


```
// 用下面命令安装我们的环境依赖   注意`-D`
yarn add -D typescript webpack webpack-cli webpack-dev-server ts-loader typedoc cross-env friendly-errors-webpack-plugin  expose-loader

// 项目依赖
yarn add phaser

```

