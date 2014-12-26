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
    },

    // 对象数组排序传参  aObj.sort(key)
    compare: function(key) {
        return function (obj1, obj2) {
            var value1 = obj1[key],
                value2 = obj2[key];
            if (value1 < value2) {
                return -1;
            } else if (value1 > value2) {
                return 1;
            } else {
                return 0;
            }
        }
    }
}