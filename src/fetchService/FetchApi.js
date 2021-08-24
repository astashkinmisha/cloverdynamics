let urlCuriosity = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&';
let urlOpportunity = 'https://api.nasa.gov/mars-photos/api/v1/rovers/opportunity/photos?sol=1000&';
let urlSpirit = 'https://api.nasa.gov/mars-photos/api/v1/rovers/spirit/photos?sol=1000&';
let apiKey = 'api_key=uidhUmUt7cvVJxb3qPjQAJvDHqTRxeqF6MK7CYLl'

export const fetchNASACuriosity = async () => {
        return await fetch(`${urlCuriosity}${apiKey}`)
            .then(value => value.json())
    }


export const fetchNASAOpportuntity = async () => {
    return await fetch(`${urlOpportunity}${apiKey}`)
        .then(value => value.json())
}

export const fetchNASASpirit = async () => {
   return await fetch(`${urlSpirit}${apiKey}`)
       .then(value => value.json())
}

