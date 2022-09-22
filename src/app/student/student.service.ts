import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class StudentService {
  constructor(private httpClient: HttpClient) {}
  public getAllStudentService() {
    return this.httpClient.get('http://localhost:8080/students/');
  }
  public getStudentService(id) {
    return this.httpClient.get('http://localhost:8080/students/' + id);
  }
  public deleteStudentService(id) {
    return this.httpClient.delete('http://localhost:8080/students/' + id);
  }
  public createStudentService(student) {
    const headers = { 'content-type': 'application/json' };
    return this.httpClient.post(
      'http://localhost:8080/students/',
      JSON.stringify(student),
      {
        headers: headers,
      }
    );
  }
  public updateStudentService(id, student) {
    const headers = { 'content-type': 'application/json' };
    return this.httpClient.put(
      'http://localhost:8080/students/' + id,
      JSON.stringify(student),
      {
        headers: headers,
      }
    );
  }
}