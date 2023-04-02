import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UrlForm, UrlData } from './../models/url-shortener';
import { UrlShortenerService } from './../services/url-shortener.service';

@Component({
  selector: 'app-create-url',
  templateUrl: './create-url.component.html',
  styleUrls: ['./create-url.component.scss'],
})
export class CreateUrlComponent {
  newUrlForm = new FormGroup<UrlForm>({
    title: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(1)],
    }),
    destinationLink: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(1)],
    }),
  });
  readonly linkIcon = '../../../../assets/icons/orange-link.svg';
  createdLink!: UrlData;
  openCreateModal = false;

  constructor(
    private urlShortenerService: UrlShortenerService,
    private router: Router
  ) {}

  createNewUrl() {
    const body = {
      title: this.newUrlForm.get('title')?.value,
      destinationLink: this.newUrlForm.get('destinationLink')?.value,
    };
    this.urlShortenerService.createLink(body).subscribe((response) => {
      console.log('createNewUrl response:', response);
      this.openCreateModal = true;
      this.createdLink = response;
    });
  }

  routeToLinksPage() {
    this.router.navigate(['/links']);
  }

  copyShortenedUrl() {
    navigator.clipboard.writeText(this.createdLink.shortenedLink);
  }
}
