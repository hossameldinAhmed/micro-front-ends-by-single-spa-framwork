import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class EmployeeService {
    private baseURL = `https://reqres.in/api/users`
    constructor(private _httpClient: HttpClient) { }

    getEmployeeDetails(id: number): Observable<any> {
        return this._httpClient.get(`${this.baseURL}/${id}`)
    }
}