var localStorageUtils = {
    setItem: null,
    getItem: null,
    removeItem: null
};

// IE6/7 下使用userData存储数据
var _initStorageDom = function() {
    if (!_initStorageDom.dataDom) {
        try {
            _initStorageDom.dataDom = document.createElement('input');
            _initStorageDom.dataDom.type = 'hidden';
            _initStorageDom.dataDom.style.display = "none";
            _initStorageDom.dataDom.addBehavior('#default#userData');
            document.body.appendChild(_initStorageDom.dataDom);
            // 设置userData过期时间
            var exDate = new Date();
            exDate.setMinutes(exDate.getMinutes() + 5);
            _initStorageDom.dataDom.expires = exDate.toUTCString();
         } catch(e) {
             return false;
         }
    }
    return true;
};

var hname = location.hostname ? location.hostname : 'localStatus';

if (window.localStorage) {
    var storage = window.localStorage;

    localStorageUtils.setItem = function(key, value) {
        try {
            storage.setItem(key, value);
        } catch (e) {
        }
    };

    localStorageUtils.getItem = function(key, value) {
        return storage.getItem(key);
    };

    localStorageUtils.removeItem = function(key) {
        storage.removeItem(key);
    };

} else {
    localStorageUtils.setItem = function(key, value) {
        if (_initStorageDom()) {
            _initStorageDom.dataDom.load(hname);
            _initStorageDom.dataDom.setAttribute(key, value);
            _initStorageDom.dataDom.save(hname);
        }
    };

    localStorageUtils.getItem = function(key, value) {
        if(_initStorageDom()){
            _initStorageDom.dataDom.load(hname);
            return _initStorageDom.dataDom.getAttribute(key);
        }
    };

    localStorageUtils.removeItem = function(key) {
        if(_initStorageDom()){
            _initStorageDom.dataDom.load(hname);
            _initStorageDom.dataDom.removeAttribute(key);
            _initStorageDom.dataDom.save(hname);
        }
    };
}