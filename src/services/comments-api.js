const BASE_URL = '/api/comments/';

    export function getAll() {
        return fetch(BASE_URL, {mode: "cors"})
        .then(res => res.json())
    }

    export function create(blacklive) {
        return fetch(BASE_URL, {
            method: "POST",
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(blacklive)
        }, {mode: "cors"})
        .then(res => res.json());
    }

    export function deleteOne(id) {
        return fetch(`${BASE_URL}${id}`, {
            method: "DELETE",
        },{mode: "cors"})
        .then(res => res.json());
    }
    