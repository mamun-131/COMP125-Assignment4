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
    var labelAD = objectsLabel.LabelAd;
    var buttonAD = objectsButton.ButtonAd;
    var paragraphHeading = [];
    var paragraphElements = [];
    var xhrParagraphDataFile;
    var contactForm;
    var firstName;
    var lastName;
    var email;
    var contactNumber;
    var message;
    function initCanvas() {
        canvas = document.getElementById("canvasBottom");
        canvas.setAttribute("width", "468");
        canvas.setAttribute("height", "60");
        stage = new createjs.Stage(canvas);
        stage.enableMouseOver(20);
        //  createjs.Ticker.useRAF = true;
        //  createjs.Ticker.setFPS(30);
        createjs.Ticker.framerate = 60;
        createjs.Ticker.addEventListener("tick", gameLoop);
        main();
    }
    /**
     * Utility Method to set the bounds of an object
     *
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
    function gameLoop(evt) {
        labelAD.x = checkBounds(labelAD.x, core.CWIDTH, labelAD.getWidth() + buttonAD.getWidth() * 0.10);
        buttonAD.x = labelAD.x + labelAD.getWidth();
        labelAD.x += 1;
        stage.update();
    }
    function main() {
        labelAD = new objectsLabel.LabelAd("Grocery Solution", "20px Consolas", "#EEE888", core.CWIDTH * 0.10, core.CHEIGHT * 0.3, false);
        stage.addChild(labelAD);
        labelAD.on("mouseover", labelAD_mouseover);
        labelAD.on("mouseout", labelAD_mouseout);
        labelAD.on("click", labelAD_clicked);
        buttonAD = new objectsButton.ButtonAd("../Assets/grocery.png", core.CWIDTH * 0.10, core.CHEIGHT * 0.10, false);
        buttonAD.scaleX = 0.10;
        buttonAD.scaleY = 0.10;
        stage.addChild(buttonAD);
        buttonAD.on("click", buttonAD_clicked);
        buttonAD.on("mouseover", buttonAD_mouseover);
        buttonAD.on("mouseout", buttonAD_mouseout);
    }
    function labelAD_mouseout() {
        //  createjs.Ticker.addEventListener("tick", gameLoop);
    }
    function labelAD_mouseover() {
        //  createjs.Ticker.removeEventListener("tick", gameLoop);
    }
    function labelAD_clicked() {
        window.open('http://www.myrasona.com', '_blank');
    }
    function buttonAD_mouseout() {
        createjs.Ticker.addEventListener("tick", gameLoop);
    }
    function buttonAD_mouseover() {
        createjs.Ticker.removeEventListener("tick", gameLoop);
    }
    function buttonAD_clicked() {
        window.open('http://www.myrasona.com', '_blank');
    }
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