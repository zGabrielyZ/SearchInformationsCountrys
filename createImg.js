export class createImg {
    constructor(img) {
        this.elementImg = document.createElement('img')
        this.elementImg.src = img
        this.elementImg.classList.add('img-country')
        return this.elementImg
    }
}