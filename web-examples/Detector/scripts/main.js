Verisurf.Main = function (game) {
};
Verisurf.Main.prototype = {
    preload: function () {
    },
    create: function () {
        //
        this.add.tileSprite(0, 0, 1920, 1080, 'background');
        //start button
        this.startButton = this.add.button(this.game.width * 0.5, 200, 'button-start', this.start, this, 2, 0, 1);
        this.startButton.anchor.set(0.5, 0);
        this.startButton.input.useHandCursor = true;
    },
    //since this happens asynchronously, we blank out the button and make the app full-screen
    // in anticipation of the socket, if the socket fails go to the full-screen error page
    start: function () {
        //remove start button
        this.startButton.destroy();
        //attempt to connect to verisurf web-socket
        socketConnect();
    }
};
