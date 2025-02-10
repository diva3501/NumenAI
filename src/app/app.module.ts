import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './intro-page/about/about.component';
import { DifferenceComponent } from './intro-page/difference/difference.component';
import { IntroComponent } from './intro-page/intro/intro.component';
import { LearnersComponent } from './intro-page/learners/learners.component';
import { WorkComponent } from './intro-page/work/work.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './learner/login/login.component';
import { SignupComponent } from './learner/signup/signup.component';
import { CoursesComponent } from './learner/courses/courses.component';
import { ProgressComponent } from './learner/progress/progress.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { ProfileComponent } from './learner/profile/profile.component';
import { TeachersComponent } from './learner/teachers/teachers.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { GoogleAuthProvider } from "firebase/auth";
import { FacebookAuthProvider } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { environment } from '../environments/environment';
import { FirebaseApp } from '@angular/fire/compat';
import { AccessAccountComponent } from './access-account/access-account.component';
import { MathematicsComponent } from './mathematics/mathematics.component';
import { ScienceComponent } from './science/science.component';
import { EnglishComponent } from './english/english.component';
import { SocialScienceComponent } from './social_science/social_science.component';
import { CheckemailComponent } from './checkemail/checkemail.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { BadgeComponent } from './badge/badge.component';
import { InstructorComponent } from './guide/instructor/instructor.component';
import { InstructorLoginComponent } from './guide/instructor-login/instructor-login.component';
import { InstructorSignupComponent } from './guide/instructor-signup/instructor-signup.component';
import { ParentComponent } from './guardian/parent/parent.component';
import { ParentLoginComponent } from './guardian/parent-login/parent-login.component';
import { ParentSignupComponent } from './guardian/parent-signup/parent-signup.component';
import { AskaiComponent } from './learner/askai/askai.component';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    DifferenceComponent,
    IntroComponent,
    LearnersComponent,
    WorkComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    CoursesComponent,
    ProgressComponent,
    ProfileComponent,
    TeachersComponent,
    AccessAccountComponent,
    MathematicsComponent,
    ScienceComponent,
    EnglishComponent,
    SocialScienceComponent,
    CheckemailComponent,
    AboutusComponent,
    BadgeComponent,
    InstructorComponent,
    InstructorLoginComponent,
    InstructorSignupComponent,
    ParentComponent,
    ParentLoginComponent,
    ParentSignupComponent,
    AskaiComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig), // Initialize Firebase
    AngularFireAuthModule, // Firebase Authentication
    AngularFireStorageModule, // Firebase Storage
    AngularFireDatabaseModule, // Firebase Realtime Database
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      registrationStrategy: 'registerWhenStable:30000'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  public constructor(app: FirebaseApp) {
  }
}
