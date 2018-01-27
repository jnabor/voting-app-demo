import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ResultsComponent } from './results/results.component';
import { PollsComponent } from './polls/polls.component';

const routes: Routes = [
  { path: '', redirectTo: '/signin', pathMatch: 'full' },
  { path: 'signin',  component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'qwertyuiopasdfghjklzxcvbnm', component: PollsComponent },
  { path: 'results', component: ResultsComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})


export class AppRoutingModule {}
