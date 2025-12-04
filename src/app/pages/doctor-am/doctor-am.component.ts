import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { DoctorService } from '../../services/doctor.service';
import { IDoctor } from '../../models/doctor.interface';
import Swal from 'sweetalert2';
import { DialogComponent } from './dialog/dialog.component';

@Component({
  selector: 'app-doctor-am',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatTooltipModule,
    MatPaginatorModule,
    MatSortModule
  ],
  templateUrl: './doctor-am.component.html',
  styleUrl: './doctor-am.component.css'
})
export class DoctorAmComponent implements OnInit {
  doctores: IDoctor[] = [];
  columnasVisibles: string[] = ['id', 'nombre', 'especialidad', 'telefono', 'email', 'estado', 'acciones'];
  cargando: boolean = false;

  constructor(
    private servicioDoctor: DoctorService,
    private dialogo: MatDialog
  ) {}

  ngOnInit(): void {
    this.cargarDoctores();
  }

  cargarDoctores(): void {
    this.cargando = true;
    this.servicioDoctor.getDoctor().subscribe(
      (respuesta: any) => {
        this.doctores = respuesta.doctores || respuesta;
        this.cargando = false;
      },
      (error) => {
        console.error('Error al cargar doctores', error);
        Swal.fire('Error', 'No se pudieron cargar los doctores', 'error');
        this.cargando = false;
      }
    );
  }

  abrirDialogo(doctor?: IDoctor): void {
    const referenciaDialogo = this.dialogo.open(DialogComponent, {
      width: '600px',
      data: doctor || null,
      disableClose: false
    });

    referenciaDialogo.afterClosed().subscribe(resultado => {
      if (resultado) {
        // Si tiene ID, es edición; si no, es creación
        if (resultado.id && resultado.id !== null && resultado.id !== undefined && resultado.id !== '') {
          this.actualizarDoctor(resultado);
        } else {
          this.crearDoctor(resultado);
        }
      }
    });
  }

  crearDoctor(doctor: IDoctor): void {
    this.servicioDoctor.saveDoctor(doctor).subscribe(
      () => {
        Swal.fire('Éxito', 'Doctor creado correctamente', 'success');
        this.cargarDoctores();
      },
      (error) => {
        console.error('Error al crear doctor', error);
        Swal.fire('Error', 'Error al crear el doctor', 'error');
      }
    );
  }

  actualizarDoctor(doctor: IDoctor): void {
    this.servicioDoctor.updateDoctor(doctor).subscribe(
      () => {
        Swal.fire('Éxito', 'Doctor actualizado correctamente', 'success');
        this.cargarDoctores();
      },
      (error) => {
        console.error('Error al actualizar doctor', error);
        Swal.fire('Error', 'Error al actualizar el doctor', 'error');
      }
    );
  }

  eliminarDoctor(doctor: IDoctor): void {
    if (!doctor.id) return;

    Swal.fire({
      title: '¿Estás seguro?',
      text: `¿Deseas eliminar a ${doctor.nombre}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((resultado) => {
      if (resultado.isConfirmed) {
        this.servicioDoctor.deleteDoctor(doctor.id as number).subscribe(
          () => {
            Swal.fire('Eliminado', 'Doctor eliminado correctamente', 'success');
            this.cargarDoctores();
          },
          (error) => {
            console.error('Error al eliminar doctor', error);
            Swal.fire('Error', 'Error al eliminar el doctor', 'error');
          }
        );
      }
    });
  }

  abrirDialogoNuevo(): void {
    this.abrirDialogo();
  }
}
