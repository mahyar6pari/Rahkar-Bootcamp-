import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { RegistrationpageComponent } from './pages/registrationpage/registrationpage.component';
import { LoginpageComponent } from './pages/loginpage/loginpage.component';
import { TransactionComponent } from './pages/transaction/transaction.component';
import { WalletComponent } from './pages/wallet/wallet.component';

export const routes: Routes = [
      {
        path:"navbar",
        component:NavbarComponent
    },
    {
    path:"registr",
    component:RegistrationpageComponent
},
{
  path:"Login",
  component:LoginpageComponent
},
{
  path:"transaction",
  component:TransactionComponent
},
{
  path:"Wallet",
  component:WalletComponent
}
];
