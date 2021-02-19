import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8080/v1/';


@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(private http: HttpClient) { }

  getRequest(): Observable<any> {
    return this.http.get(API_URL + 'list-employee', { responseType: 'json' });
  }

  postRequest(empDetails): Observable<any> {
    return this.http.post(API_URL + 'add-employee', empDetails, { responseType: 'json' });
  }

  putRequest(empDetails): Observable<any> {
    return this.http.put(API_URL + 'update-employee', empDetails, { responseType: 'json' });
  }

  deleteRequest(empid): Observable<any> {
    return this.http.delete(API_URL + 'delete-employee/'+empid);
  }

  getRequestWithParam(empid): Observable<any> {
    return this.http.get(API_URL + 'employee/'+empid);
  }


}
