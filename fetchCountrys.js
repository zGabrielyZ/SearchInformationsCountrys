export class fetchCountry {
    async fetchCountry() {
        return await fetch('https://restcountries.com/v3.1/all').then(res => res.json())
    }
}