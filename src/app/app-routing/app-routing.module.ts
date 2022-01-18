import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { LayoutComponent } from '../layout/layout.component';
import { LoginComponent } from '../login/login.component';
const routes: Routes = [
  {path: '', redirectTo:'login', pathMatch: 'full'},
  {
    path: '', 
    component: LayoutComponent,
    children: [
      {path: 'login', component:LoginComponent },
      {path: 'home', component:HomeComponent },

    ]
  }
];

@NgModule({
  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
