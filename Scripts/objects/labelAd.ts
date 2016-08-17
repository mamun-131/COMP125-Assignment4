module objectsLabel {
    export class LabelAd extends createjs.Text {
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

        
 private _textColor: string;


        constructor(
            labelAdString: string,
            labelAdFont: string,
            labelAdColour: string,
            x: number, y: number,
            isCentered: boolean) {

            super(labelAdString, labelAdFont, labelAdColour);
        
            if (isCentered) {
                this.regX = this.getMeasuredWidth() * 0.5;
                this.regY = this.getMeasuredHeight() * 0.5;
                
            }
           
            this.x = x;
            this.y = y;

            this.on("mouseover", this._mouse_over, this);
            this.on("mouseout", this._mouse_out, this);
           
        }
        public getWidth(): number{
            var textWidth = this.getMeasuredWidth();

            return textWidth;
        }
        /**
         * This event handler triggers when the mouse is over the button
         * 
         * @private
         * @method _mouse_over
         * @return {void}
         */
        private _mouse_over(): void {
            this.alpha = 0.6; // 30% transparent
            this._textColor = this.color;
            this.color = "#33ccff";

        }
        
        /**
         * This event handler triggers when the mouse leaves the button
         * 
         * @private
         * @method _mouse_out
         * @return {void}
         */
        private _mouse_out(): void {
            this.alpha = 0.99; // 100% solid
            this.color=this._textColor;

        }

    }
}

