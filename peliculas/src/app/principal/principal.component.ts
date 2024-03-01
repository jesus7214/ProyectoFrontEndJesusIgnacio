import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-principal',
  standalone: true,
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent {
  constructor(private router: Router) {} // Inject the Router in the constructor

  redirectToLogin() {
    this.router.navigate(['/log']); // Use 'this.router.navigate' instead of 'this.routes.navigate'
  }
}
