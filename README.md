# pt-vite

### 基于 vite 项目模板

-   master

    > spa: vite + antd

-   mobile
    > spa: vite + zarm

### 一些注意点

-   vite 中定义 src 的 alias，目前必须要 `/@`
    > 因为 vite 仅仅是一个 dev server，/ 或者 . 开头路径才是合法的路径，@则是被视为一个包
    > vite 2.3.x，发现目前已经解决，翻了一下 release，暂时没找到哪个版本解决的。。
-   如果 run 起来报这个错：`Error: esbuild: Failed to install correctly`，参考这个链接：https://www.jianshu.com/p/dc85066fe1fe
    > `node node_modules/esbuild/install.js`
