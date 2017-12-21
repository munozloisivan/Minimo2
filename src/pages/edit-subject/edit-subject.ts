import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import {SubjectProvider} from "../../providers/subject/subject";
import { MatricularStudentPage } from "../matricular-student/matricular-student";

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
  estudiantes: {}[];

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
      this.estudiantes = res['estudiantes'];
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
      this.navCtrl.pop();
      //let id = result['_id'];
    }, (err) => {
      console.log(err);
      this.presentToastFail('Error al modificar');
    });
  }

  addStudent(idstudent) {
    this.subjectRest.addStudentToSubject(this.IDsubject, idstudent).then((result) => {
      this.getSubjectDetail(this.IDsubject);
      this.navCtrl.pop();
    }, (err) => {
      console.log(err);
    });
  }

  deleteStudent(idstudent) {
    this.subjectRest.deleteStudentFromSubject(this.IDsubject, idstudent).then((result) => {
      this.presentToast('Eliminado Correctamente');
      this.getSubjectDetail(this.IDsubject);
      this.navCtrl.canGoBack();
    }, (err) => {
      this.presentToastFail('Error al eliminar');
      console.log(err);
    });
  }

  goToMatStudentPage() {
    this.navCtrl.push(MatricularStudentPage, {PassedId: this.IDsubject});
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
