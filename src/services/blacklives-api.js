import tokenService from '../services/tokenService';
const BASE_URL = '/api/blacklives/';

    export function getAll() {
        return fetch(BASE_URL, {
            headers: {'Authorization': 'Bearer ' + tokenService.getToken()}
        },{mode: "cors"})
        .then(res => res.json())
    }

    export function create(blacklive) {
        return fetch(BASE_URL, {
            method: "POST",
            headers: {'Content-Type': 'application/json', 'Authorization': 'Bearer ' + tokenService.getToken()},
            body: JSON.stringify(blacklive)
        },{mode: "cors"})
        .then(res => res.json());
    }

    export function deleteOne(id) {
        return fetch(`${BASE_URL}${id}`, {
            method: "DELETE",
            headers: {'Authorization': 'Bearer ' + tokenService.getToken()}
        },{mode: "cors"})
        .then(res => res.json());
    }
    