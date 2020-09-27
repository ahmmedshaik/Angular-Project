import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExamService {

  private baseUrl = 'http://localhost:8080/api/exams';

  private baseUrl1 = 'http://localhost:8080/api/exam';

  constructor(private http: HttpClient) { }

  getExam(id: number): Observable<any>{
    return this.http.get(`${this.baseUrl1}/${id}`);
  }

  createExam(exam: Object): Observable<Object>{
    return this.http.post(`${this.baseUrl1}`, exam);
  }

  getExamsList(): Observable<any>{
    return this.http.get(`${this.baseUrl}`);
  }
}
