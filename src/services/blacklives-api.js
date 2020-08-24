import tokenService from '../services/tokenService';
import Axios from 'axios'
const BASE_URL = '/api/blacklives/';

    export function getAll() {
        return fetch(BASE_URL, {
            headers: {'Authorization': 'Bearer ' + tokenService.getToken()}
        },{mode: "cors"})
        .then(res => res.json())
    }

    export async function create(blacklive) {
        const config = {          
            headers: {              
                'content-type': 'multipart/form-data','Authorization': 'Bearer ' + tokenService.getToken()          
            },      
        };      
        let res = await Axios.post(BASE_URL,blacklive,config,{mode:"cors"})         
        let data=res.data         
        return data;
    }

    export function deleteOne(id) {
        return fetch(`${BASE_URL}${id}`, {
            method: "DELETE",
            headers: {'Authorization': 'Bearer ' + tokenService.getToken()}
        },{mode: "cors"})
        .then(res => res.json());
    }
    