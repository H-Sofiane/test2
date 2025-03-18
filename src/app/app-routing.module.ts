import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminTemplateComponent} from './admin-template/admin-template.component';
import {ContactComponent} from './contact/contact.component';
import {ProfileComponent} from './profile/profile.component';

const routes: Routes = [
  {path : "" , component : AdminTemplateComponent},
  {path : "contacts", component: ContactComponent},
  {path : "profile/:id", component : ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
