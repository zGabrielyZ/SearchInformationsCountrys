export class paragraphyElement {
    constructor(text) {
        this.paragraphyElement = document.createElement('p')
        this.paragraphyElement.innerText = text
        this.paragraphyElement.classList.add('paragraphy-country')
        return this.paragraphyElement
    }
}