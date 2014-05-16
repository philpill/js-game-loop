(function(window, document, undefined){

    window.LOOPER = window.LOOPER || {};

    var Canvas = function (config) {

    }

    Canvas.prototype = {

        constructor : Canvas,

        init : function () {

            this.canvas = document.getElementById('Canvas');
            this.ctx = this.canvas.getContext("2d");
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

            this.clear();
            this.drawBeat();
        },
        drawBeat : function () {

            this.alpha = this.alpha || 1;
            this.direction = this.direction || 1;
            this.delta = this.delta || 0.1;

            if (this.direction === 1) {
                this.alpha += this.delta;
                if (this.alpha >= 1) {
                    this.direction = -1;
                }
            }

            if (this.direction === -1) {
                this.alpha -= this.delta;
                this.alpha = (this.alpha < 0.1) ? 0.1 : this.alpha;
                if (this.alpha <= 0.2) {
                    this.direction = 1;
                }
            }

            this.ctx.beginPath();
            this.ctx.arc(10, 10, 5, 0, 2 * Math.PI, false);
            this.ctx.fillStyle = 'rgba(255, 0, 0, ' + this.alpha + ')';
            this.ctx.fill();
        },
        clear : function () {
            this.canvas.width = this.canvas.width;
        }
    }

    MicroEvent.mixin(Canvas);

    window.LOOPER.Canvas = Canvas;

})(window, document);
