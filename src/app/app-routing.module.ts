import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '', redirectTo: '/welcome', pathMatch: 'full'
  },

  {
    path: 'welcome', loadChildren: () => import('./features/welcome/welcome.module')
      .then(m => m.WelcomeModule)
  },

  {
    path: 'home', loadChildren: () => import('./features/home/home.module')
      .then(m => m.HomeModule)
  },

  {
    path: 'login', loadChildren: () => import('./features/login/login.module')
      .then(m => m.LoginModule)
  },

  {
    path: 'register', loadChildren: () => import('./features/register/register.module')
      .then(m => m.RegisterModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
