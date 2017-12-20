import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { StudentProvider } from '../../providers/rest/students';
import { ToastController } from "ionic-angular";

/**
 * Generated class for the AddstudentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addstudent',
  templateUrl: 'addstudent.html',
})
export class AddstudentPage {

  student = { };

  constructor(private toastCtrl: ToastController,public navCtrl: NavController, public navParams: NavParams, public studentRest: StudentProvider ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddstudentPage');
  }

  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Añadido Correctamente',
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

  presentToastFail() {
    let toast = this.toastCtrl.create({
      message: 'No se ha podido añadir',
      duration: 2000,
      position: 'bottom',
      dismissOnPageChange: true
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }

  saveStudent() {
    this.studentRest.saveStudent(this.student).then((result) => {
      //const id = result['_id'];
      this.presentToast();
      //this.router.navigate(['/student-details', id]);
    }, (err) => {
      this.presentToastFail();
      console.log(err);
    });
  }
}
