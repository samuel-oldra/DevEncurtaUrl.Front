import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-simple-modal',
  templateUrl: './simple-modal.component.html',
  styleUrls: ['./simple-modal.component.scss'],
})
export class SimpleModalComponent implements OnInit {
  @Input() openModal = false;
  @Input() contentTitle!: string;
  @Input() contentText!: string;
  @Output() modalClosed = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit(): void {}

  closeModal(confirm: boolean = false) {
    this.openModal = false;
    this.modalClosed.emit(confirm);
  }
}
