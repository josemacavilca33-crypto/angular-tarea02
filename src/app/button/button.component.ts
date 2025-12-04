import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
 @Input() mensaje : string = '';
  @Input() className: string = '';

  @Output() eventoHijo = new EventEmitter<void>();
  emitirEvento(): void{
    this.eventoHijo.emit();

  }
}
