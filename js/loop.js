(function(window, document, undefined){
    console.log('JS Game Loop: Loop');

    window.LOOPER = window.LOOPER || {};

    var loop = function () {

        this.fpsEl = document.getElementById('Fps');
        this.timeout = this.getTimeout();
        this.lastLoop = new Date();
        this.timeoutId;
        this.isActiveClass = 'js-is-active';
        this.inactiveStyleClass = 'link--inactive';
        this.controlClass = 'control';
        this.fps;
    }

    loop.prototype = {

        constructor : loop,

        update : function (context) {

            console.log('loop.update()');

            console.log(context);

            if (context === 'init') {
                this.init();
            }
        },

        getTimeout : function () {
            var el = document.getElementById('Timeout');
            var val = el.innerHTML;
            return val ? val : 1000;
        },

        init : function () {
            this.timeoutId = window.setTimeout(this.tick, this.timeout);
        },

        deactivateControls : function () {
            var controls = document.getElementsByClassName(controlClass);
            var l = controls.length;
            while (l--) {
                deactivateElement(controls[l]);
            }
        },

        isActive : function () {
            return this.className.indexOf(isActiveClass) >= 0;
        },

        pause : function () {
            if (!isActive.apply(this)) { return; }
            window.clearTimeout(this.timeoutId);
            this.timeoutId = null;
            deactivatePause();
            activateResume();
        },

        resume : function () {
            if (!isActive.apply(this)) { return; }
            if (!this.timeoutId) {
                this.timeoutId = window.setTimeout(loop, timeout);
            }
            activatePause();
            deactivateResume();
        },

        activateResume : function () {
            activateElement(document.getElementById('Resume'));
        },

        activatePause : function () {
            activateElement(document.getElementById('Pause'));
        },

        activateElement : function (el) {
            if (!el.className.indexOf(isActiveClass) >= 0) {
                el.className = el.className + ' ' + isActiveClass;
                el.className = el.className.replace(inactiveStyleClass, '');
                el.className = sanitiseString(el.className);
            }
        },

        tick : function () {
            var thisLoop = new Date();
            this.fps = 1000 / (thisLoop - this.lastLoop);

            this.execute('loop:tick', { 'fps' : this.fps });

            this.lastLoop = thisLoop;
            this.timeoutId = window.setTimeout(this.tick, this.timeout);
        },

        displayFps : function (fps) {

            fpsEl.innerHTML = Math.round(fps*10)/10;
        },

        execute : function (name, params) {

            console.log('execute()');
            console.log(name);
            console.log(params);
        }
    }

    window.LOOPER.Loop = loop;

})(window, document);
