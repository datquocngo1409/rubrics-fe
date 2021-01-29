import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment';


@Injectable({
    providedIn: 'root'
})

export class ApiService {

    token: String = null;

    constructor(private http: HttpClient) {
    }

    getToken() {
        return this.token;
    }

    setToken(token: String) {
        this.token = token;
    }

    removeToken() {
        this.token = null;
    }

    delete(url, body) {
        let headers = new HttpHeaders();
        headers = headers.set('Content-Type', 'application/json; charset=utf-8');
        headers = headers.set('X-AUTH-TOKEN', this.token + '');
        let options = {
            body: body,
            headers: headers
        };

        return this.http.delete(url, options);
    }

    login(username: String, password: String) {
        return this.http.post(environment.apiUrl + `login`, {
            username: username,
            password: password
        });
    }

    synccurrentUser(username) {
        return this.http.get(environment.apiUrl + `user/getByUsername/` + username, {});
    }

    getcurrentStudent(userId) {
        return this.http.get(environment.apiUrl + `student/by-user/` + userId, {})
    }
}
