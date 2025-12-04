import { Component } from '@angular/core';
import { AfiliadoService } from '../../../services/afiliado.service';
import { Router } from '@angular/router';
import { IAfiliado } from '../../../models/afiliado.interface';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-paciente',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './new-paciente.component.html',
  styleUrl: './new-paciente.component.css'
})
export class NewPacienteComponent {

  constructor(private service: AfiliadoService,
    private router: Router
  ) { }

  onSave(item: IAfiliado) {
    let data: IAfiliado = {
      codigoAfiliado: item.codigoAfiliado,
      nombre: item.nombre,
      dni: item.dni,
      edad: item.edad,
      telefono: item.telefono,
      email: item.email,
      direccion: item.direccion,
      tipoSangre: item.tipoSangre,
      enfermedad: item.enfermedad,
      donador: item.donador,
      fecVenci: item.fecVenci
    }
    this.service.saveAfiliado(data).subscribe(response => {
      console.log('response', response);
      this.router.navigate(['listAfiliado']);
    })
  }
  onGoBack(): void {
    this.router.navigate(['listAfiliado']);
  }

}
