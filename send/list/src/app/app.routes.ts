import { Routes } from '@angular/router';
import { TaskesFormsComponent } from './taskes/taskes-forms/taskes-forms.component';
import { TaskesIteamsComponent } from './taskes/taskes-iteams/taskes-iteams.component';

export const routes: Routes = [
    {
        path:"taskesForms",
        component:TaskesFormsComponent
    },
    {
        path:"taskesIteams",
        component:TaskesIteamsComponent 

    }
];
