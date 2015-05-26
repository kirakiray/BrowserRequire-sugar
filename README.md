# BrowserRequire-sugar

Syntax sugar for BrowserRequire

让BrowserRequire拥有jquery那样的语法。

**注意：在BrowserRequire 1.2.0版本中已将该插件合并**

###优点

使得BrowserRequire用起来更顺手。

**案例**

BrowserRequire原生写的案例
```javascript
var r1 = require('js/moduleA','js/moduleB');
r1.ready = function(a,b){
	console.log(a + b);
};
r1.error = function(e){
	console.error(e);
}
r1.loading = function(e){
	console.log(e);
};
var r2 = r1.require('js/moduleC');
r2.ready = function(c){
	console.log(c);
};
r2.require('js/init.js');
```

使用br-sugar插件后写的案例
```javascript
require('js/moduleA','js/moduleB')
.sure(function(a,b){
	console.log(a + b);
})
.err(function(e){
	console.error(e);
})
.go(function(e){
	console.log(e);
}).require('js/moduleC')
.sure(function(c){
	console.log(c);
}).require('js/init.js');
```

使用sugar插件前，需要多次声明变量来设置响应事件；使用后，链直接设置加载响应；

###缺点

因为是单条链上的语法糖，让人忘记BrowserRequire的拓扑加载方式。

###目录介绍

dist————br-sugar插件的压缩文件

src————br-sugar插件的源代码

###使用插件

```html
<script src="js/br.js"></script>
<!--框架主文件-->
<script src="js/br-sugar.js"></script>
<!--sugar插件-->
```

或采用异步方式添加，详情请查看[插件使用文档](https://github.com/kirakiray/BrowserRequire/wiki/插件使用和介绍)

