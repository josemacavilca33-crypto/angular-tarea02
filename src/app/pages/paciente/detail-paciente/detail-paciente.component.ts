import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail-paciente',
  standalone: true,
  imports: [],
  templateUrl: './detail-paciente.component.html',
  styleUrl: './detail-paciente.component.css'
})
export class DetailPacienteComponent {

  afiliado: any;
  constructor(
    private router: Router) {
      const navigation = this.router.getCurrentNavigation();
      this.afiliado = navigation?.extras?.state;
    }

    ngOnInit(): void {
      if (this.afiliado === undefined) {
        this.router.navigate(['listAfiliado']);
      }
    }

    onGoBack(): void {
      this.router.navigate(['listAfiliado'])
    }


}
