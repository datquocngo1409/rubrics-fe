import {environment} from '../../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class API {
    public token: String;

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

    login(username: String, password: String) {
        return this.http.post(environment.apiUrl + `login`, {
            username: username,
            password: password
        });
    }

    getAllStudent() {
        return this.http.get(environment.apiUrl + `student`, {});
    }

    getStudentById(id) {
        return this.http.get(environment.apiUrl + `user/` + id, {});
    }

    signup(value: any) {
        return this.http.post(environment.apiUrl + `signup`, value);
    }

    updateStudent(id, value: any) {
        return this.http.patch(environment.apiUrl + `user/` + id, value);
    }

    getAllTeacher() {
        return this.http.get(environment.apiUrl + `teacher`, {});
    }

    getTeacherById(id) {
        return this.http.get(environment.apiUrl + `user/` + id, {});
    }

    updateTeacher(id, value: any) {
        return this.http.patch(environment.apiUrl + `user/` + id, value);
    }

    getAllRubric() {
        return this.http.get(environment.apiUrl + `rubric`, {});
    }

    getAllRequestRubric() {
        return this.http.get(environment.apiUrl + `request-rubric`, {});
    }

    getAllRequestRubricNotCreated() {
        return this.http.get(environment.apiUrl + `request-rubric/not-created`, {});
    }

    getAllRequestRubricCreated() {
        return this.http.get(environment.apiUrl + `request-rubric/created`, {});
    }


    getRubricById(id) {
        return this.http.get(environment.apiUrl + `rubric/` + id, {});
    }

    createRubric(value: any) {
        return this.http.post(environment.apiUrl + `rubric/`, value);
    }

    createRequestRubric(value: any) {
        return this.http.post(environment.apiUrl + `request-rubric/`, value);
    }

    updateRubric(id: number, value: any) {
        return this.http.patch(environment.apiUrl + `rubric/` + id, value);
    }

    getAllSubject() {
        return this.http.get(environment.apiUrl + `classroom`, {});
    }

    getSubjectById(id) {
        return this.http.get(environment.apiUrl + `classroom/` + id, {});
    }

    createSubject(value: any, teacherId: number) {
        return this.http.post(environment.apiUrl + `classroom/` + teacherId, value);
    }

    updateSubject(id: number, value: any) {
        return this.http.patch(environment.apiUrl + `classroom/` + id, value);
    }

    addStudentsToSubject(id: number, value: any) {
        return this.http.patch(environment.apiUrl + `classroom/addStudents/` + id, value);
    }

    deleteStudentsToSubject(id: number, value: any) {
        return this.http.patch(environment.apiUrl + `classroom/deleteStudents/` + id, value);
    }

    addRubricsToSubject(id: number, value: any) {
        return this.http.patch(environment.apiUrl + `classroom/addRubrics/` + id, value);
    }

    deleteRubricsToSubject(id: number, value: any) {
        return this.http.patch(environment.apiUrl + `classroom/deleteRubrics/` + id, value);
    }

    getDataSubject(id: number) {
        return this.http.get(environment.apiUrl + `classroom/getData/` + id);
    }

    getDataDetailSubject(classId: number, studentId: number) {
        return this.http.get(environment.apiUrl + `classroom/getData/detail/` + classId + `/` + studentId);
    }

    getRubricsSubject(id: number) {
        return this.http.get(environment.apiUrl + `classroom/getRubrics/` + id);
    }

    getRubricImportantsSubject(id: number) {
        return this.http.get(environment.apiUrl + `classroom/getRubricImportants/` + id);
    }

    updateRubricImportants(id: number, value: any) {
        return this.http.patch(environment.apiUrl + `classroom/updateImportants/` + id, value);
    }

    updatePoints(id: number, value: any) {
        return this.http.patch(environment.apiUrl + `classroom/updatePoints/` + id, value);
    }

    getSubjectRating(id) {
        return this.http.get(environment.apiUrl + `rating/classroom/` + id);
    }

    getAllRating() {
        return this.http.get(environment.apiUrl + `rating/classroom`);
    }

    getAllRatingBySubject(id) {
        return this.http.get(environment.apiUrl + `rating/classroom/` + id + `/getRating`);
    }

    rate(id: number, value: any) {
        return this.http.post(environment.apiUrl + `rating/classroom/` + id + `/rate`, value);
    }

    getAllTranscripData() {
        return this.http.get(environment.apiUrl + `transcript-data`);
    }
}
