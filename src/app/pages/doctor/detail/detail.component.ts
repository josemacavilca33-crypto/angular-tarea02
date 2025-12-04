import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent {

doctor: any;
constructor(
  private router: Router) {
  const navigation = this.router.getCurrentNavigation();
  this.doctor = navigation?.extras?.state;
  }

  ngOnInit(): void {
    if (this.doctor === undefined) {
      this.router.navigate(['list']);
    }
  }

  onGoBack(): void {
    this.router.navigate(['list']);
  }

}
