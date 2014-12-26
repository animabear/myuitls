var math = {
    min: function(arr) {
        var res = arr[0];
        for (var i = 1; i < arr.length; i++) {
            if (arr[i] < res) {
                res = arr[i];
            }
        }
        return res;
    }
}