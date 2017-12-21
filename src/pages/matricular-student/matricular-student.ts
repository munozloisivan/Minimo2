import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {StudentProvider} from "../../providers/rest/students";


/**
 * Generated class for the MatricularStudentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-matricular-student',
  templateUrl: 'matricular-student.html',
})
export class MatricularStudentPage {

  public IDsubject;
  students: {};

  constructor(public navCtrl: NavController, public navParams: NavParams, public rest: StudentProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MatricularStudentPage');
    this.getStudents();
  }

  getStudents() {
    this.rest.getAllStudents().then((res) => {
      this.students = res;
    }, (err) => {
      console.log(err);
    });
  }
}
