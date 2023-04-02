import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UrlShortenerService } from '../../services/url-shortener.service';
import { UrlData } from './../../models/url-shortener';

@Component({
  selector: 'app-urls-table',
  templateUrl: './urls-table.component.html',
  styleUrls: ['./urls-table.component.scss'],
})
export class UrlsTableComponent {
  @Input() urlList!: UrlData[];
  @Input() editLink!: string;
  @Output() editClicked = new EventEmitter<UrlData>();
  @Output() urlDeleted = new EventEmitter();
  private urlIdToDelete!: number;
  readonly linkIcon = '../../../../../assets/icons/orange-link.svg';
  openDeleteModal = false;

  constructor(private urlShortenerService: UrlShortenerService) {}

  emitEdit(urlData: UrlData) {
    this.editClicked.emit(urlData);
  }

  copyShortenedUrl(shortenedLink: string) {
    navigator.clipboard.writeText(shortenedLink);
  }

  modalClosed() {
    this.openDeleteModal = false;
  }

  openModal(urlId: number) {
    this.urlIdToDelete = +urlId;
    this.openDeleteModal = true;
  }

  deleteUrl() {
    this.urlShortenerService
      .deleteLink(this.urlIdToDelete)
      .subscribe((response) => {
        console.log('deleteUrl response:', response);
        this.urlDeleted.emit();
        this.modalClosed();
      });
  }
}
