export function fetchRandomCocktails(amount) {
    const allPromises = [];

    for (let count = 0; count < amount; count++) {
        allPromises.push(fetch('https://thecocktaildb.com/api/json/v1/1/random.php').then(response => response.json()));
    }

    return Promise.all(allPromises).then(data => {
        return data.map(item => item.drinks[0]);
    })
}

export function fetchCocktailsByName(name) {
    return fetch(`https://thecocktaildb.com/api/json/v1/1/search.php?s=${name}`)
        .then(response => response.json())
        .then(({drinks}) => {
            if(!drinks) throw 'Sorry';

            return drinks;
        })
}

export function fetchCocktailById(id) {
    return fetch(`https://thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then(response => response.json())
        .then(({drinks}) => drinks[0]);
}
