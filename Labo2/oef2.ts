//Oefenen met functies

let  kwadraat = (num: number) => num **2

function Anonymous(text:string,separator:string = "-") {

    return text.split(separator)
}

let product = function (...inputs:number[]){
    let pro = 1
    for (let index = 0; index < arguments.length; index++) {
       pro *= arguments[index]
        
    }
    return pro
}

console.log(product(5,5,5,2))


function GSM(jaar:number,klantNr:number,bestelNr:number)
{
    let arrJaar = [0,0,0]
    let arrKlant = [0,0,0,0]
    let arrBestelNr = [0,0,0]

    for (let i = 0; i < jaar.toString().length; i++)
    {
        arrJaar[arrJaar.length-1-i]  = parseInt(jaar.toString()[jaar.toString().length - 1-i])
    }
    for (let i = 0; i < klantNr.toString().length; i++)
    {
        arrKlant[arrKlant.length-1-i]  = parseInt(klantNr.toString()[klantNr.toString().length - 1-i])
    }
    for (let i = 0; i <bestelNr.toString().length; i++)
    {
        arrBestelNr[arrBestelNr.length-1-i]  = parseInt(bestelNr.toString()[bestelNr.toString().length - 1-i])
    }
    let checksum = parseInt(`${arrJaar.join('')}${arrKlant.join('')}${arrBestelNr.join('')}`) % 97
return `+++${arrJaar.join('')}/${arrKlant.join('')}/${arrBestelNr.join('')}${checksum}+++`
}
console.log(GSM(2017, 123, 1))
console.log(GSM(17,123,1));