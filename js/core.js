(function(window, document, undefined){

    console.log(',-->--->--->--->--->-,');
    console.log('|  ,---->----->---,  |');
    console.log('|  | JS Game Loop |  |');
    console.log('|  \'---<-----<----\'  |');
    console.log('\'--<---<---<---<---<-\'');

    window.LOOPER = window.LOOPER || {};

    var modules = [];

    var config = {

        timeout : 50
    }

    var core = {

        init : function () {

            this.loadModules();
            this.initialiseModules();
            this.bindEvents();
        },
        loadModules : function () {

            this.ticker = new window.LOOPER.Ticker(config);
            this.interface = new window.LOOPER.Interface(config);
            this.canvas = new window.LOOPER.Canvas(config);
            modules.push(this.ticker);
            modules.push(this.interface);
            modules.push(this.canvas);
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
                that.canvas.execute('tick', e);
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
