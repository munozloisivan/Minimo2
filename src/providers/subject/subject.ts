import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import "rxjs/add/operator/map";

/*
  Generated class for the SubjectProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SubjectProvider {

  private apiUrl = 'http://localhost:3000/';

  constructor(public http: HttpClient) {
    console.log('Hello SubjectProvider Provider');
  }

  getAllSubjects() {
    return new Promise((resolve, reject) => {
      this.http.get(this.apiUrl + 'subject')
        .map(res => res)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  saveSubject(data) {
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + 'subject', data)
        .map(res => res)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  deleteSubject(id) {
    return new Promise((resolve, reject) => {
      this.http.delete(this.apiUrl + 'subject/' + id)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  updateSubject(id, data) {
    return new Promise((resolve, reject) => {
      this.http.put(this.apiUrl +'subject/' + id, data)
        .map(res => res)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  showSubject(id) {
    return new Promise((resolve, reject) => {
      console.log('subject serviice show subject '+id);
      this.http.get(this.apiUrl + 'subject/' + id)
        .map(res => res)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  addStudentToSubject(id, idstudent) {
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + 'subject/' + id + '/students/' + idstudent, null)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  deleteStudentFromSubject(id, student) {
    return new Promise((resolve, reject) => {
      this.http.put(this.apiUrl + 'subject/' + id + '/students/' + student, null)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }


}
