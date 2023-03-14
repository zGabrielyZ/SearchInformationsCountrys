import { InformationCountrysInSingle } from "./InformationCountrysInSingle.js";


export class App {
    static async renderSinglesInformationsCountrys() {
        
        const singleInformationsCountrys = await InformationCountrysInSingle.singleInformationsCountrys()
        const arrCountrysNames = []
        const arrCountrys = []

        singleInformationsCountrys.forEach(singleCountryElement => {
            arrCountrysNames.push(singleCountryElement.id)
            arrCountrys.push(singleCountryElement)
        })

        function filterNameCountry(name) {
            const words = name.toLowerCase().split(' ')
            return arrCountrysNames.filter(country => words.every(word => country.startsWith(word)))
          }

        const input = document.querySelector('input')
        const form = document.querySelector('form')
        
        form.addEventListener('submit', (e) => {
            e.preventDefault()
            var section = document.querySelector('section')
            
            
             
            if(input.value != '') {
                
                const filtredNameCountry = filterNameCountry(input.value)
            
                if (filtredNameCountry.length > 0) {
                    const existingDivs = section.querySelectorAll('.single-country')
                    existingDivs.forEach(div => div.remove())
                
                    
                
                    arrCountrys.forEach(country => {
                        if (filtredNameCountry.includes(country.id)) {
                            section.append(country)
                        }
                    })
                
                    
                } else {
                    alert("Não tem esse pais")
                }
                 
            } else {
                alert('Digite algo para procuras algum pais!!')
            }
            document.getElementById('clear').addEventListener('click', (e) => {
                e.preventDefault()
                const existingDivs = section.querySelectorAll('.single-country')
                existingDivs.forEach(div => div.remove())
            })
        })

        
        
    }

        
        
        
        
        
        
    }
    


