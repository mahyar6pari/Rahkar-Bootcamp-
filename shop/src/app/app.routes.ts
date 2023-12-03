
import { NavbarcalaComponent } from './navbarcala/navbarcala.component';
import { LogingpageComponent } from './logingpage/logingpage.component';
import { MahsolComponent } from './mahsol/mahsol.component';
import { Routes } from '@angular/router';
import { HarmahsolComponent } from './harmahsol/harmahsol.component';
import { MahsolRouteComponent } from './mahsol-route/mahsol-route.component';
import { ProfileComponent } from './profile/profile.component';
import { LogComponent } from './log/log.component';

export const routes: Routes = [
{
    path:"Logingpage",
    component:LogingpageComponent
},
{
    path:"log",
    component:LogComponent
},
{
    path:"Profile",
    component:ProfileComponent
},
{
    path:"",
    component: MahsolRouteComponent,
    children: [
        {
            path: "Mahsol",
            component: MahsolComponent
        },
        {
            path: "Mahsol/:id",
            component: HarmahsolComponent
        }
    ]
}
];
