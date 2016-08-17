var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objectsButton;
(function (objectsButton) {
    var ButtonAd = (function (_super) {
        __extends(ButtonAd, _super);
        /**
         * Creates an instance of Button.
         *
         * @param {string} pathString
         * @param {number} x
         * @param {number} y
         * @param {boolean} isCentered
         */
        function ButtonAd(pathString, x, y, isCentered) {
            _super.call(this, pathString);
            if (isCentered) {
                this.regX = this.getBounds().width * 0.5;
                this.regY = this.getBounds().height * 0.5;
            }
            this.x = x;
            this.y = y;
            this.on("mousedown", this._mouse_down, this);
            this.on("pressup", this._press_up, this);
        }
        ButtonAd.prototype.getWidth = function () {
            var buttonWidth = this.image.width;
            return buttonWidth;
        };
        /**
         * This event handler triggers when the mouse is over the button
         *
         * @private
         * @method _mouse_over
         * @return {void}
         */
        ButtonAd.prototype._mouse_down = function () {
            this.alpha = 0.60; // 30% transparent
        };
        /**
         * This event handler triggers when the mouse leaves the button
         *
         * @private
         * @method _mouse_out
         * @return {void}
         */
        ButtonAd.prototype._press_up = function () {
            this.alpha = 0.99; // 100% solid
        };
        return ButtonAd;
    }(createjs.Bitmap));
    objectsButton.ButtonAd = ButtonAd;
})(objectsButton || (objectsButton = {}));
//# sourceMappingURL=buttonAd.js.map