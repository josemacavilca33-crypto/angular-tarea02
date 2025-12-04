import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { IDoctor } from '../../../models/doctor.interface';

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.css'
})
export class DialogComponent implements OnInit {
  formulario!: FormGroup;
  editando: boolean = false;
  titulo: string = 'Nuevo Doctor';

  estados: string[] = ['Activo', 'Inactivo'];
  especialidades: string[] = [
    'Cardiología',
    'Pediatría',
    'Traumatología',
    'Dermatología',
    'Oftalmología',
    'Neurología',
    'Psiquiatría',
    'Cirugía General',
    'Odontología',
    'Medicina General',
    'Gastroenterología',
    'Endocrinología',
    'Neumología'
  ];

  constructor(
    private constructorFormulario: FormBuilder,
    public referenciaDialogo: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public datos: IDoctor | null
  ) {
    this.inicializarFormulario();
  }

  ngOnInit(): void {
    if (this.datos) {
      this.editando = true;
      this.titulo = 'Editar Doctor';
      this.formulario.patchValue(this.datos);
    }
  }

  inicializarFormulario(): void {
    this.formulario = this.constructorFormulario.group({
      id: [null],
      nombre: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
      especialidad: ['', Validators.required],
      telefono: ['', [Validators.required, Validators.pattern(/^[0-9]{8,15}$/)]],
      email: ['', [Validators.required, Validators.email]],
      estado: ['Activo', Validators.required]
    });
  }

  cancelar(): void {
    this.referenciaDialogo.close();
  }

  enviar(): void {
    if (this.formulario.valid) {
      const valorFormulario = this.formulario.value;
      // Convertir teléfono a número
      if (valorFormulario.telefono) {
        valorFormulario.telefono = parseInt(valorFormulario.telefono, 10);
      }
      // Si no hay ID (crear), eliminar el campo id para que json-server lo genere
      if (!valorFormulario.id) {
        delete valorFormulario.id;
      }
      this.referenciaDialogo.close(valorFormulario);
    }
  }

  // Getters para acceso fácil a campos
  get nombre() {
    return this.formulario.get('nombre');
  }

  get especialidad() {
    return this.formulario.get('especialidad');
  }

  get telefono() {
    return this.formulario.get('telefono');
  }

  get email() {
    return this.formulario.get('email');
  }

  get estado() {
    return this.formulario.get('estado');
  }
}
