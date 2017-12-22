import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import "rxjs/add/operator/map";

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class StudentProvider {

  private apiUrl = 'http://localhost:3000/';

  constructor(public http: HttpClient) {
    console.log('Hello RestProvider Provider');
  }

  getAllStudents() {
    return new Promise((resolve, reject) => {
      this.http.get(this.apiUrl + 'student')
        .map(res => res)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  saveStudent(data) {
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl +'student', data)
        .map(res => res)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  getStudentsNotInSubject(id){
    return new Promise((resolve, reject) => {
      this.http.get(this.apiUrl+'subject/not_in/' + id)
        .map(res => res)
        .subscribe(res => {
          resolve(res)
        }, (err) => {
          reject(err);
        });
    });
  }

  deleteStudent(id) {
    return new Promise((resolve, reject) => {
      this.http.delete(this.apiUrl + 'student/' + id)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }


}
