export const api = {
    getCharacter(id) {
        return fetch(`https://swapi.co/api/people/${id}`)
    },
    getPlanet(id) {
        return fetch(`https://swapi.co/api/planets/${id}`,{method:"POST"})
    },
    getFilm(id) {
        return fetch(`https://swapi.co/api/films/${id}`,{method: "POST"})
    },
    getStarship(id) {
        return fetch(`https://swapi.co/api/starships/${id}`,{method: "POST"})
    },
    getPokemon(id) {
        return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    },
    getType(id) {
        return fetch(`https://pokeapi.co/api/v2/type/${id}`)
    },
    getLocation(id) {
        return fetch(`https://pokeapi.co/api/v2/location/${id}`)
    },
    getRef(ref) {
        return fetch(ref)
    },
}