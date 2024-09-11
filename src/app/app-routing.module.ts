import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageSignInComponent } from './login/pages/page-sign-in/page-sign-in.component';
import { PageSignUpComponent } from './login/pages/page-sign-up/page-sign-up.component';
import { PageResetPasswordComponent } from './login/pages/page-reset-password/page-reset-password.component';
import { PageForgotPasswordComponent } from './login/pages/page-forgot-password/page-forgot-password.component';

const routes: Routes = [
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  { path: 'sign-in', component: PageSignInComponent },
  { path: 'sign-up', component: PageSignUpComponent },
  { path: 'forgot', component: PageForgotPasswordComponent },
  { path: 'reset', component: PageResetPasswordComponent },
  {
    path: 'orders',
    loadChildren: () =>
      import('./orders/orders.module').then((m) => m.OrdersModule),
  }, //module dont le chargement est différé - m : module
  {
    path:'clients',
    loadChildren: () =>
      import('./clients/clients.module').then((m) => m.ClientsModule),
  },
  {
    path: '**',
    loadChildren: () =>
      import('./page-not-found/page-not-found.module').then((m) => m.PageNotFoundModule),
  }

  //a eviter de faire
  // {
  //   path: 'orders',
  //   children: [
  //     // orders/
  //     { path: '', component: PageListOrdersComponent },

  //     // orders/add
  //     { path: 'add', component: PageAddOrderComponent },

  //     // orders/edit
  //     { path: 'edit', component: PageEditOrderComponent },
  //   ],
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
