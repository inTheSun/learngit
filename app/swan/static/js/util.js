var lib = {
    /**
     * 获取URL参数
     * @returns {{}}
     */
    getUrlParams: function () {
        var search = location.search;
        var params = {};
        if (search != "") {
            search
                .slice(1)
                .split("&")
                .forEach(function(val) {
                    var arr = val.split("=");
                    params[arr[0]] = arr[1];
                });
        }
        return params;
    },
    /**
     * 添加cookie
     * @param name
     * @param value
     * @param days
     */
    set: function (name, value, days) {
        var d = new Date();
        var time = days ? 24 * 60 * 60 * 1000 * days : 24 * 60 * 60 * 1000;
        d.setTime(d.getTime() + time);
        window.document.cookie = name + "=" + value + ";path=/;expires=" + d.toGMTString();

    },
    /**
     * 获取cookie
     * @param name
     * @returns {null}
     */
    get: function (name) {
        var v = window.document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
        return v ? v[2] : null;
    },
    /**
     * 删除cookie
     * @param name
     */
    delete: function (name) {
        this.set(name, '', -1);
    }
};

window.lib = lib || {};