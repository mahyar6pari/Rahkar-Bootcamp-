import { Routes } from "@angular/router";
import { TaskesFormsComponent } from "./taskes-forms/taskes-forms.component";

export const TaskRoutes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "list"
  },
  {
    path: "list",
    component: TaskesFormsComponent
  }
];