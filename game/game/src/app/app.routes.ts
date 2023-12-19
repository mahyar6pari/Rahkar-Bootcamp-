import { Routes } from '@angular/router';
import { GameComponent } from './game/game.component';
import { GameForTwoComponent } from './game-for-two/game-for-two.component';

export const routes: Routes = [
    {
        path:"Game",
        component:GameComponent
    },
    {
        path:"GameForTwo",
        component:GameForTwoComponent
    }
];