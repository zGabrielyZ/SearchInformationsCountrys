import { fetchCountry } from "./fetchCountrys.js"

export class Countrys {
    static async #dataCountrys() {
        const responseCountrys = new fetchCountry()
        const fetchCountrys = await responseCountrys.fetchCountry()
        return fetchCountrys
    }

    static async returnCountryInformation() {
        const countrysInformations = []

        const country = await Countrys.#dataCountrys(countrysInformations)
        country.forEach(country => {
            const countryName = country.name.common
            const countryFlagSvg = country.flags.svg
            const countryCapital = country.capital
            const countryLanguage = country.languages
            const countryCurrencies = country.currencies


            if(Array.isArray(countryCapital)) {
                const [countryCapitals] = countryCapital
                countrysInformations.push({ countryName, countryFlagSvg, countryCapitals, countryLanguage, countryCurrencies })
            }
        })
        
        return countrysInformations
    }
}