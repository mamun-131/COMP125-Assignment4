var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objectsLabel;
(function (objectsLabel) {
    var LabelAd = (function (_super) {
        __extends(LabelAd, _super);
        function LabelAd(labelAdString, labelAdFont, labelAdColour, x, y, isCentered) {
            _super.call(this, labelAdString, labelAdFont, labelAdColour);
            if (isCentered) {
                this.regX = this.getMeasuredWidth() * 0.5;
                this.regY = this.getMeasuredHeight() * 0.5;
            }
            this.x = x;
            this.y = y;
            this.on("mouseover", this._mouse_over, this);
            this.on("mouseout", this._mouse_out, this);
        }
        LabelAd.prototype.getWidth = function () {
            var textWidth = this.getMeasuredWidth();
            return textWidth;
        };
        /**
         * This event handler triggers when the mouse is over the button
         *
         * @private
         * @method _mouse_over
         * @return {void}
         */
        LabelAd.prototype._mouse_over = function () {
            this.alpha = 0.6; // 30% transparent
            this._textColor = this.color;
            this.color = "#33ccff";
        };
        /**
         * This event handler triggers when the mouse leaves the button
         *
         * @private
         * @method _mouse_out
         * @return {void}
         */
        LabelAd.prototype._mouse_out = function () {
            this.alpha = 0.99; // 100% solid
            this.color = this._textColor;
        };
        return LabelAd;
    }(createjs.Text));
    objectsLabel.LabelAd = LabelAd;
})(objectsLabel || (objectsLabel = {}));
//# sourceMappingURL=labelAd.js.map