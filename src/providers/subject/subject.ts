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


}
