import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AfiliadoService } from '../../../services/afiliado.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-paciente',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-paciente.component.html',
  styleUrl: './list-paciente.component.css'
})
export class ListPacienteComponent {
  navigationExtras : NavigationExtras = {
    state: {
      value: null
    }
  }

  listAfiliados: any;

  constructor(private router: Router, private service: AfiliadoService) {}

ngOnInit(): void {
  this.getAfiliadoInit()
}

getAfiliadoInit(): void {
  this.service.getAfiliado().subscribe(response => {
    this.listAfiliados = response;
    console.log('response', response);
  })
}

onGoToEdit(item: any ) {
  console.log(item)
  this.navigationExtras.state = item;
  const {id} = item;
  this.router.navigate(['/editAfiliado/', id], this.navigationExtras);
}

onGoToDetail(item: any) {
  console.log(item);
  this.navigationExtras.state = item;
  const {id} = item;
  this.router.navigate(['/detailAfiliado/', id], this.navigationExtras);
}

onGoToDelete(item: any){
  console.log(item)
  const {id} = item;
  Swal.fire({
    title: "¿Desea eliminar el registro?",
    showDenyButton: true,
    confirmButtonText: "Si",
    denyButtonText: "Cancelar"
  }).then((result) => {
    if (result.isConfirmed) {
      this.service.deleteAfiliado(id).subscribe(
        response => {
          console.log('response', response);
          this.getAfiliadoInit();
        }
      )
      Swal.fire("Se elimno correctamente el registro", "", "success");
    } else if (result.isDenied) {
      
    }
  });
}

}
