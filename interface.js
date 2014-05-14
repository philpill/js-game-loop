(function(window, document, undefined){

    console.log('JS Game Loop Interface');

    window.LOOPER = window.LOOPER || {};

    var interface = function () {

    }

    interface.prototype = {

        constructor : interface,

        init : function () {
            console.log('interface init()');
            this.bindControls();
        },

        update : function (context) {

            console.log('update()');
            console.log('context');
        },

        bindControls : function () {
            var pauseEl = document.getElementById('Pause');
            var resumeEl = document.getElementById('Resume');
            pauseEl.onclick = this.pause.bind(this);
            resumeEl.onclick = this.resume.bind(this);
        },

        pause : function () {
            if (!this.isActiveElement(this)) { return; }

            // tell core to pause

            // deactivatePause();
            // activateResume();
        },

        resume : function () {
            if (!this.isActive.apply(this)) { return; }

            // tell core to resume

            // activatePause();
            // deactivateResume();
        },

        isActive : function () {
            console.log(this);
            return this.className.indexOf(this.isActiveClass) >= 0;
        },

        execute : function (command) {
            console.log('execute()');
        }
    }

    window.LOOPER.Interface = interface;

})(window, document);
