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

    // 对象数组排序传参  aObj.sort(compare(key))
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
    },

    extend: function(target, source, deep) {
        var self = this, key;
        for (key in source) {
            if ( deep && ( self._isArray(source[key]) || self._isObject(source[key]) ) ) {
                if (self._isArray(source[key]) && !self._isArray(target[key])) {
                    target[key] = [];
                }
                if (self._isObject(source[key]) && !self._isObject(target[key])) {
                    target[key] = {};
                }
                self.extend(target[key], source[key], deep);

            } else if (source[key] !== undefined) {
                target[key] = source[key];
            }
        }
    },

    // 倒计时,second为倒计时秒数，text为单位（可以不传）
    // Todo: 支持s和min单位
    timer: function($ele, second, unit, callback) {
        var sid;
        var counter = function() {
            unit ? $ele.html(second + unit) : $ele.html(second);
            second -= 1;
            sid = setTimeout(counter, 1000);
            if (second < 0) {
                clearTimeout(sid);
                callback();
            }
        };
        counter();
    },

    _isArray: function(value) {
        return Object.prototype.toString.call(value) === '[object Array]';
    },

    _isObject: function(value) {
        return Object.prototype.toString.call(value) === '[object Object]';
    }
}








