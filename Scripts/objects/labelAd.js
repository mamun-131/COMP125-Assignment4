var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    var LabelAd = (function (_super) {
        __extends(LabelAd, _super);
        /**
         * Creates an instance of Label.
         *
         * @param {string} labelAdString
         * @param {string} labelAdFont
         * @param {string} labelAdColour
         * @param {number} x
         * @param {number} y
         * @param {boolean} isCentered
         */
        function LabelAd(labelAdString, labelAdFont, labelAdColour, x, y, isCentered) {
            _super.call(this, labelAdString, labelAdFont, labelAdColour);
            if (isCentered) {
                this.regX = this.getMeasuredWidth() * 0.5;
                this.regY = this.getMeasuredHeight() * 0.5;
            }
            this.x = x;
            this.y = y;
        }
        return LabelAd;
    }(createjs.Text));
    objects.LabelAd = LabelAd;
})(objects || (objects = {}));
//# sourceMappingURL=labelAd.js.map