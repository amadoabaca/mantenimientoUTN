import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionEdificiosComponent } from './gestion-edificios.component';

describe('GestionEdificiosComponent', () => {
  let component: GestionEdificiosComponent;
  let fixture: ComponentFixture<GestionEdificiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionEdificiosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionEdificiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
