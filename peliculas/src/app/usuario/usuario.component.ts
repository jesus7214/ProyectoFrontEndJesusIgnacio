import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario',
  standalone: true,
  imports: [],
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css'
})
export class UsuarioComponent {

  constructor(private router: Router) {} 
  
  redirigir_Principal() {
    this.router.navigate(['/p']); 
  }
 

  redirigir_usuario() {
    this.router.navigate(['/usuario']);
  }
}
