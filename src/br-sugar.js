/**
    @fileoverview br.js的语法糖插件
*/
require.extend(function (baseResource, F, C, R, Global) {
    var emptyFun = function () {};
    F.extend(C.Require.prototype, {
        sure: function (fun) {
            this.ready = fun || emptyFun;
            return this;
        },
        go: function (fun) {
            this.loading = fun || emptyFun;
            return this;
        },
        err: function (fun) {
            this.error = fun || emptyFun;
            return this;
        }
    });
}, 'sugar');