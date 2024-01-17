import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NameWelcomeComponent } from './name-welcome/name-welcome.component';
import { AddressWelcomeComponent } from './address-welcome/address-welcome.component';

const routes: Routes = [
  { path: '', redirectTo: '/name-welcome', pathMatch:'full'},
  { path: 'name-welcome', component: NameWelcomeComponent},
  { path: 'address-welcome', component: AddressWelcomeComponent},
  { path: '**', component: NameWelcomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
