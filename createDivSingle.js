export class createDivSingle {
    constructor(img, nameCountry, ...paragraphy) {
        this.elementSingle = document.createElement('div')
        this.elementSingle.id = `${nameCountry}`
        this.elementSingle.classList.add('single-country')
        this.elementSingle.append(img, ...paragraphy)
        return this.elementSingle
    }
}