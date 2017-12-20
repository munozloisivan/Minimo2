import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import {SubjectProvider} from "../../providers/subject/subject";

/**
 * Generated class for the EditSubjectPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-subject',
  templateUrl: 'edit-subject.html',
})
export class EditSubjectPage {

  public IDsubject;
  nombre: string;
  estudios: string;
  cuatrimestre: string;
  tipo: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public subjectRest: SubjectProvider, private toastCtrl: ToastController ) {

    this.IDsubject = navParams.get("firstPassedId");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditSubjectPage');
    this.getSubjectDetail(this.IDsubject);
  }

  getSubjectDetail(id) {
    this.subjectRest.showSubject(id).then((res) => {
      this.nombre = res['nombre'];
      this.estudios = res['estudios'];
      this.cuatrimestre = res['cuatrimestre'];
      this.tipo = res['tipo'];
    }, (err) => {
      console.log(err);
    });
  }

  updateSubject() {
    this.subjectRest.updateSubject(this.IDsubject, {nombre: this.nombre,
      estudios: this.estudios,
      cuatrimestre: this.cuatrimestre,
      tipo: this.tipo}).then((result) => {
      this.presentToast('Modificada correctamente');
      //let id = result['_id'];
    }, (err) => {
      console.log(err);
      this.presentToastFail('Error al modificar');
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
