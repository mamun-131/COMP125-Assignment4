/// <reference path="objects/buttonAd.ts"/>
/// <reference path="objects/labelAd.ts"/>
/**
 * This is a mini profile extended web application which is all about Md Mamunur Rahman
 *
 * @FileName: app.js
 * @Author Md Mamunur Rahman
 * @student ID: 300872772
 * @Last Update 04-August-2016
 * @website: http://mamun-miniportfolio-extended.azurewebsites.net
 * @description: this file is main javascript file for the website
 */
// IIFE - Immediately Invoked Function Expression
var core;
(function (core) {
    "use strict";
    // define objects, arrays and variabes
    var canvas;
    core.CWIDTH = 468;
    core.CHEIGHT = 60;
    var stage;
    var labelAdGrocery = objectsLabel.LabelAd;
    var buttonAdGrocery = objectsButton.ButtonAd;
    var labelAdPhotographer = objectsLabel.LabelAd;
    var buttonAdPhotographer = objectsButton.ButtonAd;
    var paragraphHeading = [];
    var paragraphElements = [];
    var xhrParagraphDataFile;
    var contactForm;
    var firstName;
    var lastName;
    var email;
    var contactNumber;
    var message;
    //CANVAS ANIMATION AND OBJECTS HANDLING ++++++++++++++++++++++++++++++++++++++++
    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    /**
     * Initial Method to initialize Canvas and its objects
     *
     * @method initCanvas
     * @returns {void}
     */
    function initCanvas() {
        canvas = document.getElementById("canvasBottom");
        canvas.setAttribute("width", "468");
        canvas.setAttribute("height", "60");
        stage = new createjs.Stage(canvas);
        stage.enableMouseOver(20);
        createjs.Ticker.framerate = 60;
        createjs.Ticker.addEventListener("tick", gameLoop);
        main();
    }
    /**
     * Utility Method to set the bounds of an object
     *
     * @method checkBounds
     * @param {number} axis
     * @param {number} boundary
     * @returns {number}
     */
    function checkBounds(axis, boundary, objectWidth) {
        if (axis >= boundary) {
            axis = -objectWidth;
        }
        return axis;
    }
    /**
     * Utility Method to ensure iteration of statement as per intervel of tricker and animation of AD
     *
     * @method gameLoop
     * @param {var} evt
     * @returns {void}
     */
    function gameLoop(evt) {
        if (checkBounds(labelAdGrocery.x, core.CWIDTH, labelAdGrocery.getWidth() + buttonAdGrocery.getWidth() * 0.10) < 0 &&
            labelAdPhotographer.x < 0 && (labelAdPhotographer.x + labelAdPhotographer.getWidth()) > 0) {
            labelAdGrocery.x = labelAdPhotographer.x - labelAdGrocery.getWidth() - 80;
        }
        else {
            labelAdGrocery.x = checkBounds(labelAdGrocery.x, core.CWIDTH, labelAdGrocery.getWidth() + buttonAdGrocery.getWidth() * 0.10);
        }
        buttonAdGrocery.x = labelAdGrocery.x + labelAdGrocery.getWidth();
        labelAdGrocery.x += 1;
        if (checkBounds(labelAdPhotographer.x, core.CWIDTH, labelAdPhotographer.getWidth() + buttonAdPhotographer.getWidth() * 0.10)
            < 0 && labelAdGrocery.x < 0 && (labelAdGrocery.x + labelAdGrocery.getWidth() > 0)) {
            labelAdPhotographer.x = labelAdGrocery.x - labelAdPhotographer.getWidth() - 80;
        }
        else {
            labelAdPhotographer.x = checkBounds(labelAdPhotographer.x, core.CWIDTH, labelAdPhotographer.getWidth() + buttonAdPhotographer.getWidth() * 0.10);
        }
        buttonAdPhotographer.x = labelAdPhotographer.x + labelAdPhotographer.getWidth();
        labelAdPhotographer.x += 1;
        if (labelAdGrocery.x < 0 && labelAdPhotographer.x < 0 && labelAdGrocery.x < labelAdPhotographer.x) {
        }
        stage.update();
    }
    /**
     * Utility Method to initialize objects for Canvas
     *
     * @method main
     * @returns {void}
     */
    function main() {
        labelAdGrocery = new objectsLabel.LabelAd("Grocery Solution", "20px Consolas", "#EEE888", -200, core.CHEIGHT * 0.3, false);
        stage.addChild(labelAdGrocery);
        labelAdGrocery.on("mouseover", labelAdGrocery_mouseover);
        labelAdGrocery.on("mouseout", labelAdGrocery_mouseout);
        labelAdGrocery.on("click", labelAdGrocery_clicked);
        buttonAdGrocery = new objectsButton.ButtonAd("../Assets/grocery.png", -200, core.CHEIGHT * 0.10, false);
        buttonAdGrocery.scaleX = 0.10;
        buttonAdGrocery.scaleY = 0.10;
        stage.addChild(buttonAdGrocery);
        buttonAdGrocery.on("click", buttonAdGrocery_clicked);
        buttonAdGrocery.on("mouseover", buttonAdGrocery_mouseover);
        buttonAdGrocery.on("mouseout", buttonAdGrocery_mouseout);
        labelAdPhotographer = new objectsLabel.LabelAd("Website Development", "20px Consolas", "#EEE888", (core.CWIDTH * 0.50), core.CHEIGHT * 0.3, false);
        stage.addChild(labelAdPhotographer);
        labelAdPhotographer.on("mouseover", labelAdPhotographer_mouseover);
        labelAdPhotographer.on("mouseout", labelAdPhotographer_mouseout);
        labelAdPhotographer.on("click", labelAdPhotographer_clicked);
        buttonAdPhotographer = new objectsButton.ButtonAd("../Assets/web_development.png", core.CWIDTH * 0.50, core.CHEIGHT * 0.10, false);
        buttonAdPhotographer.scaleX = 0.10;
        buttonAdPhotographer.scaleY = 0.10;
        stage.addChild(buttonAdPhotographer);
        buttonAdPhotographer.on("click", buttonAdPhotographer_clicked);
        buttonAdPhotographer.on("mouseover", buttonAdPhotographer_mouseover);
        buttonAdPhotographer.on("mouseout", buttonAdPhotographer_mouseout);
    }
    /**
     * This function is a event handler function for labelAdGrocery_mouseout event
     *
     * @method labelAdGrocery_mouseout
     * @return {void}
     */
    function labelAdGrocery_mouseout() {
        createjs.Ticker.addEventListener("tick", gameLoop);
    }
    /**
     * This function is a event handler function for labelAdGrocery_mouseover event
     *
     * @method labelAdGrocery_mouseover
     * @return {void}
     */
    function labelAdGrocery_mouseover() {
        createjs.Ticker.removeEventListener("tick", gameLoop);
    }
    /**
 * This function is a event handler function for labelAdGrocery_clicked event
 *
 * @method labelAdGrocery_clicked
 * @return {void}
 */
    function labelAdGrocery_clicked() {
        window.open('http://mywebshopping.azurewebsites.net', '_blank');
    }
    /**
     * This function is a event handler function for buttonAdGrocery_mouseout event
     *
     * @method buttonAdGrocery_mouseout
     * @return {void}
     */
    function buttonAdGrocery_mouseout() {
        createjs.Ticker.addEventListener("tick", gameLoop);
    }
    /**
 * This function is a event handler function for buttonAdGrocery_mouseover event
 *
 * @method buttonAdGrocery_mouseover
 * @return {void}
 */
    function buttonAdGrocery_mouseover() {
        createjs.Ticker.removeEventListener("tick", gameLoop);
    }
    /**
 * This function is a event handler function for buttonAdGrocery_clicked event
 *
 * @method buttonAdGrocery_clicked
 * @return {void}
 */
    function buttonAdGrocery_clicked() {
        window.open('http://mywebshopping.azurewebsites.net', '_blank');
    }
    /**
     * This function is a event handler function for labelAdPhotographer_mouseout event
     *
     * @method labelAdPhotographer_mouseout
     * @return {void}
     */
    function labelAdPhotographer_mouseout() {
        createjs.Ticker.addEventListener("tick", gameLoop);
    }
    /**
 * This function is a event handler function for labelAdPhotographer_mouseover event
 *
 * @method labelAdPhotographer_mouseover
 * @return {void}
 */
    function labelAdPhotographer_mouseover() {
        createjs.Ticker.removeEventListener("tick", gameLoop);
    }
    /**
 * This function is a event handler function for labelAdPhotographer_clicked event
 *
 * @method labelAdPhotographer_clicked
 * @return {void}
 */
    function labelAdPhotographer_clicked() {
        window.open('http://photographers.azurewebsites.net', '_blank');
    }
    /**
 * This function is a event handler function for buttonAdPhotographer_mouseout event
 *
 * @method buttonAdPhotographer_mouseout
 * @return {void}
 */
    function buttonAdPhotographer_mouseout() {
        createjs.Ticker.addEventListener("tick", gameLoop);
    }
    /**
 * This function is a event handler function for buttonAdPhotographer_mouseover event
 *
 * @method buttonAdPhotographer_mouseover
 * @return {void}
 */
    function buttonAdPhotographer_mouseover() {
        createjs.Ticker.removeEventListener("tick", gameLoop);
    }
    /**
 * This function is a event handler function for buttonAdPhotographer_clicked event
 *
 * @method buttonAdPhotographer_clicked
 * @return {void}
 */
    function buttonAdPhotographer_clicked() {
        window.open('http://photographers.azurewebsites.net', '_blank');
    }
    // END OF CANVAS HANDLING++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    //FILE READING PROCESS HANDLING FOR PARAGRAPH GENERATION BEGIN+++++++++++++++++++
    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    /*
     * This function is for reading data from file
     *
     * @method readData
     * @return {void}
     */
    function readData() {
        // data loaded                                      everything is ok
        if ((xhrParagraphDataFile.readyState === 4) && (xhrParagraphDataFile.status === 200)) {
            var paragraphFile = JSON.parse(xhrParagraphDataFile.responseText);
            var paragraphs = paragraphFile.paragraphs;
            var counter = 0;
            //extracting data from object
            paragraphs.forEach(function (paragraph) {
                if (paragraphElements[counter]) {
                    paragraphHeading[counter].innerHTML = paragraph.paragraphHeading;
                    paragraphElements[counter].innerHTML = paragraph.paragraphDetail;
                }
                console.log(paragraph.paragraphDetail);
                counter++;
            }, this);
        }
    }
    /**
     * This function is for connecting with file and to ope for file reading
     *
     * @method readParagraphFile
     * @return {void}
     */
    function readParagraphFile() {
        xhrParagraphDataFile = new XMLHttpRequest(); // create xhr object
        xhrParagraphDataFile.open("GET", "../Scripts/paragraphs.json", true); // open request
        xhrParagraphDataFile.send(null); // send request
        xhrParagraphDataFile.addEventListener("readystatechange", readData);
    }
    //FILE READING PROCESS HANDLING FOR PARAGRAPH GENERATION END+++++++++++++++++++
    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    //FORM HANDLING IN CONTACT PAGE BEGIN++++++++++++++++++++++++++++++++++++++++++++
    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    /**
     * This function is for handling form in contact page
     *
     * @method formHandlingContactPage
     * @return {void}
     */
    function formHandlingContactPage() {
        //creat a reference to the button in contact page
        var sendButton = document.getElementById("sendButton");
        //check to see if endbutton exists
        if (sendButton) {
            //event listener 
            sendButton.addEventListener("click", sendButtonClick);
        }
        //create a references for fields in contatc page form
        firstName = document.getElementById("firstName");
        lastName = document.getElementById("lastName");
        email = document.getElementById("email");
        contactNumber = document.getElementById("contactNumber");
        message = document.getElementById("message");
        //create a reference to the form
        contactForm = document.getElementById("contactForm");
        if (contactForm) {
            //event listener
            contactForm.addEventListener("submit", contactFormSubmit);
        }
    }
    /**
     * This function is a event handler function for sendButtonClick event
     *
     * @method sendButtonClick
     * @return {void}
     */
    function sendButtonClick(event) {
        console.log("clicked");
    }
    /**
     * This function is a event handler function for formsubmit event
     *
     * @method contactFormSubmit
     * @return {void}
     */
    function contactFormSubmit(event) {
        contactForm.reset();
        event.preventDefault();
        console.log("submitted");
        showFormInput();
    }
    /**
     * This function shows the input from each form field on console
     *
     * @method showFormInput
     * @return {void}
     */
    function showFormInput() {
        console.log("+++++++++++++++++++++++++++++++++++");
        console.log("First Name: " + firstName.value);
        console.log("Last Name: " + lastName.value);
        console.log("Email: " + contactNumber.value);
        console.log("Contact Number: " + email.value);
        console.log("Message: " + message.value);
        console.log("+++++++++++++++++++++++++++++++++++");
    }
    //FORM HANDLING IN CONTACT PAGE END++++++++++++++++++++++++++++++++++++++++++++
    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    /**
     * This function binds paragraph element and headings
     *
     * @method handlingParagraph
     * @return {void}
     */
    function handlingParagraph() {
        //bonding ids with paragraphHeading arrays
        paragraphHeading[0] = document.getElementById("homeHeading");
        paragraphHeading[1] = document.getElementById("projectsHeading");
        paragraphHeading[2] = document.getElementById("biographyHeading");
        paragraphHeading[3] = document.getElementById("blogsHeading");
        paragraphHeading[4] = document.getElementById("photographyHeading");
        paragraphHeading[5] = document.getElementById("contactHeading");
        //bonding ids with paragraphElements arrays
        paragraphElements[0] = document.getElementById("homePara");
        paragraphElements[1] = document.getElementById("projectsPara");
        paragraphElements[2] = document.getElementById("biographyPara");
        paragraphElements[3] = document.getElementById("blogsPara");
        paragraphElements[4] = document.getElementById("photographyPara");
        paragraphElements[5] = document.getElementById("contactPara");
    }
    // app entry function
    function init() {
        initCanvas();
        formHandlingContactPage();
        handlingParagraph();
        readParagraphFile();
    }
    // call init funciton when window finishes loading
    window.addEventListener("load", init);
})(core || (core = {}));
//# sourceMappingURL=app.js.map