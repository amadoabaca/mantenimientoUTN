import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionPisosComponent } from './gestion-pisos.component';

describe('GestionPisosComponent', () => {
  let component: GestionPisosComponent;
  let fixture: ComponentFixture<GestionPisosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionPisosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionPisosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
