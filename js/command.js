(function(window, document, undefined){
    console.log('JS Game Loop: Commands');

    window.LOOPER = window.LOOPER || {};

    // http://www.dofactory.com/javascript-command-pattern.aspx

    function tick () {

        console.log('tick()');
    }


    var Command = function (execute) {

        this.execute = execute;
    }

    var TickCommand = function () {

        return new Command(tick);
    }


    window.LOOPER.Command = command;

})(window, document);