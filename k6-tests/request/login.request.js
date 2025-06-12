import { check } from "k6";
import http from 'k6/http';
import Utils from '../utils/utils.js';


export default class Login {
    //usar o "#" (hashtag) cria uma variável privada - só funciona dentro desta classe
    #token

    access(user, pass){
        let response = http.post(`${Utils.getBaseUrl()}/login`, JSON.stringify(
            {
                "username": user,
                "password": pass
            }
        ), {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        })
        this.#token = response.json('accesToken')
        check(response, {
            "status must be 201": (r) => r.status === 201
        });
    }

    getToken(){
        return this.#token
    }
}