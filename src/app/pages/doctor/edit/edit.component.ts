import { Component } from '@angular/core';
import { DoctorService } from '../../../services/doctor.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IDoctor } from '../../../models/doctor.interface';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {
doctor: any;
  doctorId: string | null;

  constructor(private service: DoctorService,
    private router: Router,
    private rout: ActivatedRoute
  ) {
    const navigation = this.router.getCurrentNavigation();
    this.doctor = navigation?.extras?.state;
    this.doctorId = this.rout.snapshot.paramMap.get('id');
  }
  ngOnInit(): void {
if(this.doctor === undefined) {
  this.router.navigate(['list']);
}
  }

  onSave(item: IDoctor): void {
    let data: IDoctor = {
      id: Number(this.doctorId),
      nombre: item.nombre,
      especialidad: item.especialidad,
      telefono: item.telefono,
      email: item.email, 
      estado: item.estado
    }
    this.service.updateDoctor(data)
    .subscribe(respponse => {
      console.log('respomse', respponse);
      this.router.navigate(['list']);
    })
  }

  onGoBack(): void {
    this.router.navigate(['list']);
  }

}
