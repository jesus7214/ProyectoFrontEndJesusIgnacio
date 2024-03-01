import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginicioComponent } from './loginicio.component';

describe('LoginicioComponent', () => {
  let component: LoginicioComponent;
  let fixture: ComponentFixture<LoginicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginicioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoginicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
