import { Component } from '@angular/core';
import { AfiliadoService } from '../../../services/afiliado.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IAfiliado } from '../../../models/afiliado.interface';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-paciente',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './edit-paciente.component.html',
  styleUrl: './edit-paciente.component.css'
})
export class EditPacienteComponent {
  afiliado: any;
  afiliadoId: string | null;

  constructor(private service: AfiliadoService,
    private router : Router,
    private rout: ActivatedRoute
  ) {
const navigation = this.router.getCurrentNavigation();
this.afiliado = navigation?.extras?.state;
this.afiliadoId = this.rout.snapshot.paramMap.get('id');

  }
  ngOnInit(): void {
    if (this.afiliado === undefined) {
      this.router.navigate(['listAfiliado']);
    }
  }
  onSave(item: IAfiliado):void {
    let data: IAfiliado = {
      id:Number(this.afiliadoId),
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
    this.service.updateAfiliado(data)
    .subscribe(response => {
      console.log('response', response);
      this.router.navigate(['listAfiliado']);
    })

  }

  onGoBack(): void{
    this.router.navigate(['listAfiliado'])
  }

}
