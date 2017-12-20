import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { StudentProvider } from '../../providers/rest/students';
import { AddstudentPage } from '../addstudent/addstudent';
import {AddsubjectPage} from "../addsubject/addsubject";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  students: any;
  errorMessage: string;

  constructor(public navCtrl: NavController, public rest: StudentProvider) {

  }

  ionViewDidLoad() {
    this.getStudents();
  }

  goToAddStudentPage() {
    this.navCtrl.push(AddstudentPage);
  }

  getStudents() {
    this.rest.getAllStudents().then((res) => {
      this.students = res;
    }, (err) => {
      console.log(err);
      this.errorMessage = <any>err;
    });
  }

}
