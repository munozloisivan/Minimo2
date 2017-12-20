import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import { SubjectProvider} from '../../providers/subject/subject';

/**
 * Generated class for the AddsubjectPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addsubject',
  templateUrl: 'addsubject.html',
})
export class AddsubjectPage {

  subject: { nombre: '', estudios: '', cuatrimestre: '', tipo: '' };

  nombre: string;
  estudios: string;
  cuatrimestre: string;
  tipo: string;

  constructor(private toastCtrl: ToastController, public navCtrl: NavController, public navParams: NavParams, public subjectRest: SubjectProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddsubjectPage');
  }

  saveSubject() {
    this.subjectRest.saveSubject({
      nombre: this.nombre,
      estudios: this.estudios,
      cuatrimestre: this.cuatrimestre,
      tipo: this.tipo
    }).then((result) => {
      this.presentToast();
      this.navCtrl.pop();
      //const id = result['_id'];
      //this.router.navigate(['/subject-details', id]);
    }, (err) => {
      console.log(err);
      this.presentToastFail();
    });
  }

  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Añadida Correctamente',
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
}
