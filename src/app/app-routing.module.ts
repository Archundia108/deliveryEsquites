import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { LoginComponent } from './pages/login/login.component';
import { MenuComponent } from './pages/menu/menu.component';
import { RegistrarComponent } from './pages/registrar/registrar.component';
import { ValidarEmailComponent } from './pages/validar-email/validar-email.component';
import { VerOrdenesComponent } from './pages/ver-ordenes/ver-ordenes.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch:'full' },
  { path: 'login', component: LoginComponent },
  { path: 'menu', component: MenuComponent, canActivate: [AuthGuard] },
  { path: 'registro', component: RegistrarComponent },
  { path: 'validar-email', component: ValidarEmailComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
