# FEF

前端开发使用gulp做了css和js自动构建和版本v1，

v1:主要作为gulp配置自动构建的参考示例，也作为blog文章的参考demo

## 使用方式：

加载依赖库：

````
//项目根目录执行 这个命令会加载所有gulp和bower依赖库
npm run appInit

````

## 查看效果

````
//执行默认任务 
gulp 

//构建js
gulp js

//构建css
gulp css

//清理文件夹
gulp clean

//监听js，css修改，启动命令后修改 app中css目录和js目录的文件就会重新构建文件
gulp watch

````


## 错误处理

一般错误都是由于少了某个依赖库导致的，有的使用npm install 加载的库会出错，那就手动一个个加吧~ 

