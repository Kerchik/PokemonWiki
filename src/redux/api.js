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
    getRef(ref) {
        return fetch(ref)
    },
}