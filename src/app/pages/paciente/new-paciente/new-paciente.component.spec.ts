import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPacienteComponent } from './new-paciente.component';

describe('NewPacienteComponent', () => {
  let component: NewPacienteComponent;
  let fixture: ComponentFixture<NewPacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewPacienteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
