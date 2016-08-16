module objects {
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
        }
    }
}

