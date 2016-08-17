module objectsButton {
    export class ButtonAd extends createjs.Bitmap {
        /**
         * Creates an instance of Button.
         * 
         * @param {string} pathString
         * @param {number} x
         * @param {number} y
         * @param {boolean} isCentered
         */
        constructor(pathString: string, x: number, y: number, isCentered: boolean) {
            super(pathString);

            if (isCentered) {
                this.regX = this.getBounds().width * 0.5;
                this.regY = this.getBounds().height * 0.5;
            }
            
            this.x = x;
            this.y = y;
            

            this.on("mousedown", this._mouse_down, this);
            this.on("pressup", this._press_up, this);
        }

        public getWidth(): number{
            var buttonWidth = this.image.width;

            return buttonWidth;
        }

        /**
         * This event handler triggers when the mouse is over the button
         * 
         * @private
         * @method _mouse_over
         * @return {void}
         */
        private _mouse_down(): void {
            this.alpha = 0.60; // 30% transparent

        
        }
        
        /**
         * This event handler triggers when the mouse leaves the button
         * 
         * @private
         * @method _mouse_out
         * @return {void}
         */
        private _press_up(): void {
            this.alpha = 0.99; // 100% solid
            
        }

    }
}