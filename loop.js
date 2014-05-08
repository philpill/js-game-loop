(function(window, document, undefined){

    console.log('JS Game Loop');

    var fpsEl = document.getElementById('Fps');
    var timeout = getTimeout();
    var lastLoop = new Date();
    var timeoutId;

    function getTimeout () {
        var el = document.getElementById('Timeout');
        var val = el.innerHTML;
        return val ? val : 1000;
    }

    function init () {
        bindControls();
        return window.setTimeout(loop, timeout);
    }

    function bindControls () {
        var pauseEl = document.getElementById('Pause');
        pauseEl.onclick = pause;
    }

    function pause () {
        window.clearTimeout(timeoutId);
    }

    function loop () {
        var thisLoop = new Date();
        var fps = 1000 / (thisLoop - lastLoop);
        displayFps(fps);
        lastLoop = thisLoop;
        timeoutId = window.setTimeout(loop, timeout);
    }

    function displayFps (fps) {
        fpsEl.innerHTML = Math.round(fps*10)/10;
    }

    timeoutId = init();

})(window, document);
