let urlCuriosity = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=2&api_key=DEMO_KEY';

export const getData = () => {
    return fetch(urlCuriosity)
        .then(value => value.json())
}
