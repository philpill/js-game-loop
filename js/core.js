(function(window, document, undefined){

    console.log('JS Game Loop: Core');

    window.LOOPER = window.LOOPER || {};

    var modules = [];

    var core = {

        init : function () {

            this.loadModules();
            this.initialiseModules();
            this.bindEvents();
        },
        loadModules : function () {

            this.ticker = new window.LOOPER.Ticker();
            this.interface = new window.LOOPER.Interface();
            modules.push(this.ticker);
            modules.push(this.interface);
        },
        initialiseModules : function () {

            var l = modules.length;
            while (l--) {
                modules[l].init();
            }
        },
        bindEvents : function () {

            var that = this;

            this.ticker.bind('tick', function(e) {
                that.interface.execute('tick', e);
            });

            this.ticker.bind('pause', function(e) {
                console.log('ticker:pause');
                that.interface.execute('pause');
            });

            this.ticker.bind('resume', function(e) {
                console.log('ticker:resume');
                that.interface.execute('resume');
            });

            this.interface.bind('pause', function(e) {
                console.log('interface:pause');
                that.ticker.execute('pause');
            });

            this.interface.bind('resume', function(e) {
                console.log('interface:resume');
                that.ticker.execute('resume');
            });
        }
    }

    return core.init();

})(window, document);
