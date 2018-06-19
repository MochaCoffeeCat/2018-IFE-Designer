var Finder = (function () {
    function Finder() {
    }
    Finder.prototype.getDom = function (label, cur) {
        var arr = label.split(' '), curDom = cur || document;
        for (var i in arr) {
            var flag = arr[i].substring(0, 1), name_1 = arr[i];
            switch (flag) {
                case '#': {
                    curDom = curDom.querySelector(name_1);
                    break;
                }
                default: {
                    curDom = curDom.querySelectorAll(name_1);
                }
            }
        }
        return curDom;
    };
    Finder.prototype.find = function (cur, next) {
        return this.getDom(next, cur);
    };
    return Finder;
}());
var Demo = (function () {
    function Demo(container) {
        this.finder = new Finder();
        this.container = this.finder.getDom(container);
        this.__btnEventBind();
    }
    Demo.prototype.__btnEventBind = function () {
        var btn = this.finder.find(this.container, '#demoBtn'), text = this.finder.find(this.container, '#titleText');
        btn.addEventListener('click', function () {
            var classArr = text.getAttribute('class').replace(/(^\s*)|(\s*$)/g, '').split(/\s+/), index = classArr.indexOf('active');
            if (index == -1) {
                classArr.push('active');
            }
            else {
                classArr.splice(index, 1);
            }
            text.setAttribute('class', classArr.join(' '));
        });
    };
    return Demo;
}());
var demo = new Demo('#demoContainer');
