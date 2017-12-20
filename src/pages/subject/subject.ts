import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import { SubjectProvider} from '../../providers/subject/subject';
import { AddsubjectPage } from "../addsubject/addsubject";
import { EditSubjectPage } from "../edit-subject/edit-subject";

/**
 * Generated class for the SubjectPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-subject',
  templateUrl: 'subject.html',
})
export class SubjectPage {

  subjects: any;
  errorMessage: string;

  constructor(private toastCtrl: ToastController,public navCtrl: NavController, public navParams: NavParams, public SubjectRest: SubjectProvider ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SubjectPage');
    this.getSubjectList();
  }

  ionViewWillEnter() {
    this.getSubjectList();
  }

  getSubjectList() {
    this.SubjectRest.getAllSubjects().then((res) => {
      this.subjects = res;
    }, (err) => {
      console.log(err);
      this.errorMessage = <any>err;
    });
  }

  goToAddAsignaturaPage() {
    this.navCtrl.push(AddsubjectPage);
  }

  goToEditAsignaturaPage(id) {
    this.navCtrl.push(EditSubjectPage, {firstPassedId: id});
  }

  deleteAsignatura(id) {
    this.SubjectRest.deleteSubject(id).then((result) => {
      this.presentToast('Eliminada correctamente!');
      this.getSubjectList();
      //this.router.navigate(['/home']);
    }, (err) => {
      console.log(err);
      this.presentToastFail('Error al eliminarla')
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
