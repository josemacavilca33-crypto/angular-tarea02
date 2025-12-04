import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DoctorService } from '../../../services/doctor.service';
import { Router } from '@angular/router';
import { IDoctor } from '../../../models/doctor.interface';

@Component({
  selector: 'app-new',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './new.component.html',
  styleUrl: './new.component.css'
})
export class NewComponent {

  constructor(private service: DoctorService,
    private router: Router
  ) {}

  onSave(item: IDoctor){
    let data: IDoctor = {
      nombre: item.nombre,
      especialidad: item.especialidad,
      telefono: item.telefono,
      email: item.email, 
      estado: item.estado
    }
    this.service.saveDoctor(data).subscribe(response => {
      console.log('response', response);
      this.router.navigate(['list']);
    })
  }

  onGoBack(): void {
    this.router.navigate(['list']);
  }

}
