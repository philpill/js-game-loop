(function(window, document, undefined){

    console.log('JS Game Loop: Core');

    window.LOOPER = window.LOOPER || {};

    var interface = new window.LOOPER.Interface();
    var loop = new window.LOOPER.Loop();
    var observers = new window.LOOPER.ObserverList();

    var core = {

        addObserver : function (observer) {
            observers.add(observer);
        },
        removeObserver : function (observer) {
            observers.removeAt(observers.indexOf(observer, 0));
        },
        notify : function (context) {
            var observerCount = observers.count();
            for (var i = 0; i < observerCount; i++) {
                observers.get(i).update(context);
            }
        },
        init : function () {
            this.addObserver(interface);
            this.addObserver(loop);
            this.notify('init');
        }
    }

    return core.init();

})(window, document);
