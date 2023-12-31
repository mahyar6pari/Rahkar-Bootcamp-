import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { RegistrationpageComponent } from '../pages/registrationpage/registrationpage.component';
import { LoginpageComponent } from '../pages/loginpage/loginpage.component';
import { NavbarComponent } from '../pages/navbar/navbar.component';
import { HomeComponent } from '../pages/home/home.component';

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
  path:"home",
  component:HomeComponent
},

];
