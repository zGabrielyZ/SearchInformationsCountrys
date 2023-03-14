import { Countrys } from "./Countrys.js";
import { createDivSingle } from "./createDivSingle.js";
import { createImg } from "./createImg.js";
import { paragraphyElement } from "./paragraphyElement.js";

export class InformationCountrysInSingle {

    static formateCountryName(name) {
        const formated = name.replace(/ /g, '-')
        return formated.toLowerCase()
    }

    static async singleInformationsCountrys() {

        const divs = []
        const countrysInformations = await Countrys.returnCountryInformation()
        countrysInformations.forEach(informations => {
            const img = new createImg(informations.countryFlagSvg)
            const countryCurrencies = informations.countryCurrencies
            const arrCountryCurrencies = Object.values(countryCurrencies)
            const countryCurrenciesName = arrCountryCurrencies[0].name
    
            if(arrCountryCurrencies[0].symbol) {
    
                var countryCurrenciesSymbol = arrCountryCurrencies[0].symbol
            } else {
                var countryCurrenciesSymbol = "Dont't exists symbol for this country"
            }
    
            
    
            
            const nameCountry = new paragraphyElement(`Name: ${informations.countryName}`)
            const capitalCountry = new paragraphyElement(`Capital: ${informations.countryCapitals}`)
            const countryCurrenciesNameP = new paragraphyElement(`Name Currencies: ${countryCurrenciesName}`)
            const countryCurrenciesSymbolP = new paragraphyElement(`Symbol Currencies: ${countryCurrenciesSymbol}`)
            
            
    
            const countryCurrenciesNameFormated = InformationCountrysInSingle.formateCountryName(informations.countryName)
            
            
            
    
            const single = new createDivSingle(img, countryCurrenciesNameFormated, nameCountry, capitalCountry, countryCurrenciesNameP, countryCurrenciesSymbolP)
            divs.push(single)
            
        })
    
        return divs
        
    }
}

