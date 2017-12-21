import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MatricularStudentPage } from './matricular-student';

@NgModule({
  declarations: [
    MatricularStudentPage,
  ],
  imports: [
    IonicPageModule.forChild(MatricularStudentPage),
  ],
})
export class MatricularStudentPageModule {}
