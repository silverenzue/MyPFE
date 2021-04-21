import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ModalComponent } from './modal/modal.component';
import { SectionComponent } from './section/section.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'hotel', component: ContactComponent},
  {path: 'mon_compte', component: ContactComponent},
  {path: 'contact', component: ContactComponent},
  { path: '**', redirectTo: 'home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
