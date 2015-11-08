
# 单页面SPA

## overview

基于 backbonejs框架（依赖jQuery和underscorejs）部署的单页面web应用程序。

初期想法： 通过requirejs异步加载各个模块。

但是随着项目的扩张，异步加载的模块越来越多。即便区分不同页面入口，也只不过将页面依赖的模块分给这些页面入口调用，同时这种显得难以管理依赖关系的状况。  
requirejs为了解决这个问题，虽然引入的RequireJS的优化方案：[r.js Optimizer](https://github.com/jrburke/r.js), 但是每个页面入口依赖的模块都会打包成一个文件，如果多个页面之间的公用的模块，无法通用或缓存起来使用。

那么，webpack 完全解决了以上问题，所以通过使用 webpack 对模块的管理。

同时，模块以nodejs风格编码显得更加简洁易懂。

## usage

通过构建任务 `gulp connect` 开启本地服务

构建任务： `gulp webpack:build` 和 `gulp webpack:build-dev`
