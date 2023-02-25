import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() label!: string;
  @Input() size: 'sm' | 'md' | 'lg' = 'lg';
  @Input() rounded = false;
  @Input() disabled = false;
  @Input() icon!: string;
  @Input() actionPrimary = false;
  @Input() actionDanger = false;
  @Output() onClick = new EventEmitter();

  buttonClicked() {
    this.onClick.emit();
  }
}
