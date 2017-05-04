# douban

> A Vue.js project

## 项目开发约定
所有人必须使用dev分支开发，先建立一个自己的分支，开发好了之后，合并到dev分支，然后我再合并到master分支。

[git分支管理](http://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000/0013743862006503a1c5bf5a783434581661a3cc2084efa000)

一些常用的分支管理命令。
1. 查看当前分支,前面有*的号代表当前分支  ` git branch`   。
2. 创建并切换分支。 `git checkout -b dev` 
3. 切换分支`git checkout dev` 
4. 将开发的分支合并到dev分支，先从自己分支切换到dev分支，然后 `git merge dev` 就可以成功合并到dev分支了。
5. 删除分支，合并后的分支可以删除了。 `git branch -d dev`

### 项目使用了standard这个规范。写法会比较严格，报错了，自己看错误提示解决哈,不要随意修改规则。


### 关于css
项目我在使用sass里的scss预处理，跟原生css写法一样。你们可以试着用用，或者干脆就用原生css也行。
建议css写进.vue里面的style标签里面。如果使用scss就这样定义
`<style lang="scss" scoped> </style>`
不使用就 `<style scoped> </style>`
scoped这个标识符是限定当前文件内的css代码只对当前文件起作用，从而不会影响别的组件，记得都加上。
如果喜欢css提出来写的，也可以。统一放入components/common/css目录下面。

### 关于axios请求数据。
使用方法。
```
this.$http.get(URL).then(response => {
    // success callback
}, response => {
    // error callback
})
```



## Build Setup

``` bash
# install dependencies
npm install

安装失败尝试更新npm，最新的npm已经是 4.5.0  
更新命令  `npm install npm@latest -g`

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
