var utils = {
    $: function(id) {
        return document.getElementById(id);
    },
    /* 绑定函数作用域 */
    bind: function(fn, context) {
        var self = this;
        if (self.isFunction(fn.bind)) {
            return fn.bind(context);
        }
        return function() {
            return fn.apply(context, arguments);
        }
    },
    isFunction: function(value) {
        return Object.prototype.toString.call(value) === '[object Function]';
    }
}