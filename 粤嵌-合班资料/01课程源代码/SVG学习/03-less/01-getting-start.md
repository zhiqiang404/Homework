# 安装node

http://nodejs.cn/download/

```bash
$ node -v
$ npm -v
```

## 安装cnpm
https://npm.taobao.org/
```bash
$ npm install -g cnpm --registry=https://registry.npm.taobao.org
```

# 安装 less
http://www.css88.com/doc/less

```
$ npm install -g less
$ cnpm install -g less 

$ lessc -v 查看less版本

win+r cmd
win+x powershell
$ cd less
$ dir


$ lessc styles.less
$ lessc styles.less styles.css

Easy LESS vscode插件 自动编译

```

浏览器端用法
```html
<link rel="stylesheet/less" type="text/css" href="styles.less" />
<script src="https://cdn.bootcss.com/less.js/3.0.4/less.min.js"></script>
```
+ less.js 必须在style.less文件之后
+ rel="stylesheet/less"


Beautify


```json
{    
    "less.compile": {
        "compress":  false,  // true => remove surplus whitespace
        "sourceMap": true,  // true => generate source maps (.css.map files)
        "out":       "css/app.css", // false => DON'T output .css files (overridable per-file, see below)
        "autoprefixer": "> 5%, last 2 Chrome versions,not ie 6-9",
    }
}
```