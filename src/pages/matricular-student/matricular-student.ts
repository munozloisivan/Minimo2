import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import {StudentProvider} from "../../providers/rest/students";
import {SubjectProvider} from "../../providers/subject/subject";


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
  students: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public rest: StudentProvider, public subjectrest: SubjectProvider, private toastCtrl: ToastController) {
    this.IDsubject = navParams.get("PassedId");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MatricularStudentPage');
    this.getStudentsNot();
  }

  ionViewWillEnter() {
    this.getStudentsNot();
  }

  getStudents() {
    this.rest.getAllStudents().then((res) => {
      this.students = res;
    }, (err) => {
      console.log(err);
    });
  }

  getStudentsNot() {
    this.rest.getStudentsNotInSubject(this.IDsubject).then(
      (students) => {
        console.log(students);
        this.students = students;
      },
      (error) => {
        console.log(error);
      });
  }

  addStudent(idstudent) {
    this.subjectrest.addStudentToSubject(this.IDsubject, idstudent).then((result) => {
      this.presentToast('Estudiante Matriculado');
      this.navCtrl.pop();
    }, (err) => {
      this.presentToastFail('Error al matricular');
      console.log(err);
    });
  }

  presentToast(mensaje) {
    let toast = this.toastCtrl.create({
      message: mensaje,
      duration: 2500,
      position: 'bottom',
      cssClass: "toast-success",
      dismissOnPageChange: true
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }

  presentToastFail(mensaje) {
    let toast = this.toastCtrl.create({
      message: mensaje,
      duration: 2500,
      position: 'bottom',
      dismissOnPageChange: true
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }
}
