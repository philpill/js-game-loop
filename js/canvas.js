(function(window, document, undefined){

    window.LOOPER = window.LOOPER || {};

    var Canvas = function (config) {

    }

    Canvas.prototype = {

        constructor : Canvas,

        init : function () {

            this.canvas = document.getElementById('Canvas');
            this.context = this.canvas.getContext("2d");
            this.bindEvents();
        },
        bindEvents : function () {
            this.canvas.addEventListener('click', function (e) {

                console.log(e);

            }, false);
        },
        execute : function (command, e) {

            this[command + 'Command'](e);
        },
        tickCommand : function (e) {

        }
    }

    MicroEvent.mixin(Canvas);

    window.LOOPER.Canvas = Canvas;

})(window, document);
