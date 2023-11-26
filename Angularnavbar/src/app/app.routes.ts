import { Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { UsersComponent } from './users/users.component';
import { BootstrapComponent } from './bootstrap/bootstrap.component';
import { FormbulderComponent } from './formbulder/formbulder.component';

export const routes: Routes = [
    {
        path: "navbar",
        component:NavbarComponent,
    },
    {
        path:"users",
        component:UsersComponent
    },
    {
        path:"bootstrap",
        component:BootstrapComponent
    },
    {
        path:"formBulder",
        component:FormbulderComponent
    }
];
