import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ResultsComponent } from './results/results.component';
import { VotingComponent } from './voting/voting.component';
import { MainwindowComponent } from './mainwindow/mainwindow.component';

const routes: Routes = [
  { path: '', redirectTo: '/signin', pathMatch: 'full' },
  { path: 'signin',  component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'voting', component: VotingComponent },
  { path: 'results', component: ResultsComponent },
  { path: 'main', component: MainwindowComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})


export class AppRoutingModule {}
