// import { Routes } from '@angular/router';

// import { PrincipalComponent } from './principal/principal.component';
// import { LoginicioComponent } from './loginicio/loginicio.component';


// export const routes: Routes = [
//     { path: 'p', component: PrincipalComponent },
//     { path: '', redirectTo: '/p', pathMatch: 'full' },

//     { path: 'log', component: LoginicioComponent }
// ];
import { Routes } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { LoginicioComponent } from './loginicio/loginicio.component';
import { RegistroComponent } from './registro/registro.component';
import { UsuarioComponent } from './usuario/usuario.component';


export const routes: Routes = [
    { path: 'p', component: PrincipalComponent },
    { path: 'log', component: LoginicioComponent },
    { path: 'reg', component: RegistroComponent},
    { path: 'usuario', component: UsuarioComponent},
    { path: '', redirectTo: 'p', pathMatch: 'full' } // Redirige la ruta raíz a '/p'
];
