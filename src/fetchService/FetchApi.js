let url = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=uidhUmUt7cvVJxb3qPjQAJvDHqTRxeqF6MK7CYLl';

export const getData = () => {
    return fetch(url)
        .then(value => value.json())
}
