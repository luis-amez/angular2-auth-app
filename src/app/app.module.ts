import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { AuthService } from './services/auth.service';

import { RequireAuthGuard } from './guards/require-auth.guard';
import { RequireAnonGuard } from './guards/require-anon.guard';

import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { TasksPageComponent } from './pages/tasks-page/tasks-page.component';
import { PlaygroundPageComponent } from './pages/playground-page/playground-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';

import { AuthLoginComponent } from './components/auth-login/auth-login.component';
import { AuthSignupComponent } from './components/auth-signup/auth-signup.component';

// import router

const routes: Routes = [
  { path: '', redirectTo: 'tasks', pathMatch: 'full' },
  { path: 'auth/login', canActivate: [RequireAnonGuard], component: LoginPageComponent },
  { path: 'auth/signup', canActivate: [RequireAnonGuard], component: SignupPageComponent },
  { path: 'tasks', canActivate: [RequireAuthGuard], component: TasksPageComponent },
  { path: 'profile', component: ProfilePageComponent },
  { path: 'playground', component: PlaygroundPageComponent },

];

@NgModule({
  declarations: [
    AppComponent,
    PlaygroundPageComponent,
    LoginPageComponent,
    SignupPageComponent,
    TasksPageComponent,
    ProfilePageComponent,
    AuthLoginComponent,
    AuthSignupComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    AuthService,
    RequireAuthGuard,
    RequireAnonGuard,
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
