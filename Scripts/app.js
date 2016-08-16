/// <reference path="objects/label.ts"/>
/**
 * FileName: app.js
 *
 * @author Tom Tsiliopoulos
 * @date August 3, 2016
 *
 * StudentID: 300818557
 *
 * @description This file is the main javascript file for the web site
 */
// IIFE - Immediately Invoked Function Expression
(function () {
    "use strict";
    var canvas;
    var stage;
    var helloLabel;
    // app entry function
    function init() {
        canvas = document.getElementById("canvas");
        stage = new createjs.Stage(canvas);
        createjs.Ticker.framerate = 60; // 60 frames per second
        createjs.Ticker.on("tick", gameLoop); // call gameLoop every frame
        main();
    }
    function gameLoop() {
        helloLabel.rotation += 5;
        stage.update(); // refresh the stage container
    }
    function main() {
        helloLabel = new objects.Label("MAMUN", "40px Consolas", "#000000", 160, 160, true);
        stage.addChild(helloLabel);
    }
    // call init funciton when window finishes loading
    window.addEventListener("load", init);
})();
//# sourceMappingURL=app.js.map