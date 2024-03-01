import { Routes } from '@angular/router';

import { PrincipalComponent } from './principal/principal.component';
import { LoginicioComponent } from './loginicio/loginicio.component';


export const routes: Routes = [
    { path: 'p', component: PrincipalComponent },
     { path: '', redirectTo: '/p', pathMatch: 'full' },

    { path: 'log', component: LoginicioComponent }
];