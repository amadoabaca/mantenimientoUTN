import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionSectoresComponent } from './gestion-sectores.component';

describe('GestionSectoresComponent', () => {
  let component: GestionSectoresComponent;
  let fixture: ComponentFixture<GestionSectoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionSectoresComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionSectoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
