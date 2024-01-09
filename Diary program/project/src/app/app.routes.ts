import { Routes } from '@angular/router';
import { SabtComponent } from './sabt/sabt.component';
import { ListComponent } from './list/list.component';

export const routes: Routes = [
    {
        path:"",
        component:SabtComponent
    },
    {
        path:"Sabt",
        component:SabtComponent
    },
    {
        path:"List",
        component:ListComponent
    },
];
