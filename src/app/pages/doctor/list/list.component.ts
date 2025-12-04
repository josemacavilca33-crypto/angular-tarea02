import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { DoctorService } from '../../../services/doctor.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  navigationExtras: NavigationExtras = {
    state: {
      value: null
    }
  }
  listDoctores: any;

  constructor(private router: Router, private service : DoctorService) {}

ngOnInit(): void {
  this.getDoctorInit();
}

getDoctorInit(): void {
  this.service.getDoctor().subscribe(response => {
    this.listDoctores = response;
    console.log('response', response);
  })
}

onGoToEdit(item: any) {
  console.log(item)
    this.navigationExtras.state = item;
    const { id } = item;
    this.router.navigate(['/edit/', id], this.navigationExtras);
}

onGoToDetail(item: any) {
    console.log(item);
    this.navigationExtras.state = item;
    const { id } = item;
    this.router.navigate(['/detail/', id], this.navigationExtras);


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
      this.service.deleteDoctor(id).subscribe(
        response => {
          console.log('response', response);
          this.getDoctorInit();
        }
      )
      Swal.fire("Se elimno correctamente el registro", "", "success");
    } else if (result.isDenied) {
      
    }
  });
}
}
