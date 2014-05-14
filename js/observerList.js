(function(window, document, undefined){

    console.log('JS Game Loop Interface');

    console.log('http://addyosmani.com/resources/essentialjsdesignpatterns/book/#observerpatternjavascript');

    window.LOOPER = window.LOOPER || {};

    var ObserverList = function () {

        this.observers = [];
    }

    ObserverList.prototype = {

        add : function (observer) {
            this.observers.push(observer);
        },
        count : function () {
            return this.observers.length;
        },
        indexOf : function (observer, index) {
            var i = index || 0;
            while (i < this.observers.length) {
                if (this.observers[i] === observer) {
                    return i;
                }
                i++;
            }
            return -1;
        },
        get : function (index) {
            if (index > -1 && index < this.count()){
                return this.observers[index];
            }
        },
        removeAt : function(index){
            this.observers.splice( index, 1 );
        }
    }

    window.LOOPER.ObserverList = ObserverList;

})(window, document);
