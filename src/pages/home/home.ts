import { Component } from '@angular/core';
import {NavController, ToastController} from 'ionic-angular';
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

  constructor(public navCtrl: NavController, public rest: StudentProvider, private toastCtrl: ToastController) {

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

  deleteStudent(id) {
    this.rest.deleteStudent(id).then((result) => {
      this.getStudents();
      this.presentToast('Eliminado correctamente');
    }, (err) => {
      this.presentToastFail('Error al eliminar');
      console.log(err);
    });
  }

  presentToast(mensaje) {
    let toast = this.toastCtrl.create({
      message: mensaje,
      duration: 1500,
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
      duration: 2000,
      position: 'bottom',
      dismissOnPageChange: true
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }

}
