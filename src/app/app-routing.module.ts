import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PeopleNgrxComponent } from './components/people-ngrx/people-ngrx.component';
import { PeopleComponent } from './components/people/people.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'people', component: PeopleComponent},
  { path: 'people-ngrx', component: PeopleNgrxComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
