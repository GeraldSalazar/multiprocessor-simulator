import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: 'simulator', component: HomeComponent},
  {path: '', redirectTo: 'simulator', pathMatch: 'full'},
  {path: '**', redirectTo: 'simulator'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
