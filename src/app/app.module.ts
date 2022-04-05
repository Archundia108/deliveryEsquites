import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VerOrdenesComponent } from './pages/ver-ordenes/ver-ordenes.component';
import { RegistrarOrdenComponent } from './pages/registrar-orden/registrar-orden.component';
import { RegistrarComponent } from './pages/registrar/registrar.component';
import { LoginComponent } from './pages/login/login.component';
import { ValidarEmailComponent } from './pages/validar-email/validar-email.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { MenuComponent } from './pages/menu/menu.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    VerOrdenesComponent,
    RegistrarOrdenComponent,
    RegistrarComponent,
    LoginComponent,
    ValidarEmailComponent,
    ForgotPasswordComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
