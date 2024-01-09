import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SabtComponent } from "./sabt/sabt.component";
import { ListComponent } from "./list/list.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports: [CommonModule, RouterOutlet, SabtComponent, ListComponent]
})
export class AppComponent {
  title = 'project';
}
