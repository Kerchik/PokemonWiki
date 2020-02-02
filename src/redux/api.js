export const api = {
    get(id) {
        return fetch(`https://swapi.co/api/people/${id}`)
    },
    getRef(ref) {
        return fetch(ref)
    },
    getPlanet(id) {
        return fetch(`https://swapi.co/api/planets/${id}`,{method:"POST"})
    },
    getFilm(id) {
        return fetch(`https://swapi.co/api/films/${id}`,{method: "POST"})
    }
}