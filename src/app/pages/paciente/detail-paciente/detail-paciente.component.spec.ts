import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPacienteComponent } from './detail-paciente.component';

describe('DetailPacienteComponent', () => {
  let component: DetailPacienteComponent;
  let fixture: ComponentFixture<DetailPacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailPacienteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
