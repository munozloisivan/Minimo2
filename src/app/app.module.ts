import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HttpClient} from "@angular/common/http";
import { HttpClientModule } from "@angular/common/http";

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { AddstudentPage } from "../pages/addstudent/addstudent";
import { SubjectPage } from '../pages/subject/subject';
import { AddsubjectPage } from '../pages/addsubject/addsubject';
import { EditSubjectPage } from "../pages/edit-subject/edit-subject";
import { MatricularStudentPage } from "../pages/matricular-student/matricular-student";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StudentProvider } from '../providers/rest/students';
import { SubjectProvider } from '../providers/subject/subject';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    AddstudentPage,
    SubjectPage,
    AddsubjectPage,
    MatricularStudentPage,
    EditSubjectPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    AddstudentPage,
    SubjectPage,
    AddsubjectPage,
    MatricularStudentPage,
    EditSubjectPage
  ],
  providers: [
    StatusBar,
    HttpClient,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    StudentProvider,
    SubjectProvider
  ]
})
export class AppModule {}
