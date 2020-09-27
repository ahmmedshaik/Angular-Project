import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Student1Service {
  
  private baseUrl = 'http://localhost:8080/api/students';

  private baseUrl1 = 'http://localhost:8080/api/student';


  constructor(private http: HttpClient) { }

  getStudent1(id: number): Observable<any>{
    return this.http.get(`${this.baseUrl1}/${id}`);
  }

  createStudent1(student1: Object): Observable<Object>{
    return this.http.post(`${this.baseUrl1}`, student1);
  }

  updateStudent1(student1: Object): Observable<Object>{
    return this.http.put(`${this.baseUrl1}`, student1);
  }

  deleteStudent1(id: number): Observable<any>{
    return this.http.delete(`${this.baseUrl1}/${id}`, { responseType: 'text' });
  }

  getStudnetsList(): Observable<any>{
    return this.http.get(`${this.baseUrl}`);
  }
}
