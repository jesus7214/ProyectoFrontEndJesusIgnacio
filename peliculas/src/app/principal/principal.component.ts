import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-principal',
  standalone: true,
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css'],
})
export class PrincipalComponent {
 
  constructor(private router: Router,  private sanitizer: DomSanitizer) {}

  redirectToLogin() {
    this.router.navigate(['/log']);
  }
  redirigir_Principal() {
    this.router.navigate(['/p']);
  }
  redirigir_registro() {
    this.router.navigate(['/reg']);
  }





  imageSource: string = "/assets/imagenes/avengers.jpg"; 
  videoUrl: SafeResourceUrl = '';

  trailer() {
    this.imageSource = ''; 
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/8zg2J1ysDzM');
  }




}
