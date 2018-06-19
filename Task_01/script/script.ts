class Finder {
    getDom(label, cur) {
        let arr = label.split(' '), curDom = cur || document;
        for(let i in arr){
            let flag = arr[i].substring(0, 1), name=arr[i];
            switch (flag) {
                case '#': {
                    curDom = curDom.querySelector(name);
                    break;
                }
                default: {
                    curDom = curDom.querySelectorAll(name);
                }
            }
        }
        return curDom;
    }

    find(cur, next) {
        return this.getDom(next, cur);
    }
}

class Demo {
    finder;
    container: Object;
    constructor (container) {
        this.finder = new Finder();
        this.container = this.finder.getDom(container);
        this.__btnEventBind();
    }

    __btnEventBind() {
        let btn = this.finder.find(this.container, '#demoBtn'),
            text = this.finder.find(this.container, '#titleText');
        btn.addEventListener('click', function () {
            let classArr = text.getAttribute('class').replace(/(^\s*)|(\s*$)/g, '').split(/\s+/),
                index = classArr.indexOf('active');
            if(index==-1){
                classArr.push('active');
            }else{
                classArr.splice(index, 1);
            }
            text.setAttribute('class', classArr.join(' '));
        })
    }
}

const demo = new Demo('#demoContainer');