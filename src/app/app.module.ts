import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { TaskListComponent } from './tasks/task-list/task-list.component';
import { TaskListItemComponent } from './tasks/task-list-item/task-list-item.component';
import { FormsModule } from '@angular/forms';
import { CreateLoginComponent } from './create-login/create-login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    HomeComponent,
    LayoutComponent,
    TaskListComponent,
    TaskListItemComponent,
    CreateLoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
