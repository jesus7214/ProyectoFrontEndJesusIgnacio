import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginicio',
  standalone: true,
  imports: [],
  templateUrl: './loginicio.component.html',
  styleUrl: './loginicio.component.css'
})
export class LoginicioComponent {
  constructor(private router: Router) {} 

  
    redirigir_Principal() {
      this.router.navigate(['/p']); 
    }
    redirigir_registro() {
      this.router.navigate(['/reg']);
    }
  
    redirigir_usuario() {
      this.router.navigate(['/usuario']);
    }
}
