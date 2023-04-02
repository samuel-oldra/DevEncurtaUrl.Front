import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UrlData, UrlForm } from './../models/url-shortener';
import { UrlShortenerService } from './../services/url-shortener.service';

@Component({
  selector: 'app-edit-url',
  templateUrl: './edit-url.component.html',
  styleUrls: ['./edit-url.component.scss'],
})
export class EditUrlComponent implements OnInit {
  urlData!: UrlData;
  editUrlForm = new FormGroup<UrlForm>({
    title: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(1)],
    }),
    destinationLink: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(1)],
    }),
  });

  constructor(
    private router: Router,
    private urlShortenerService: UrlShortenerService
  ) {
    const state = this.router.getCurrentNavigation()?.extras?.state;
    state && state['urlData']
      ? (this.urlData = state['urlData'])
      : this.router.navigate(['/links']);
  }

  ngOnInit(): void {
    this.applyFormValues();
  }

  private applyFormValues() {
    this.editUrlForm
      .get('title')
      ?.patchValue(this.urlData.title, { onlySelf: true });
    this.editUrlForm
      .get('destinationLink')
      ?.patchValue(this.urlData.destinationLink, { onlySelf: true });
  }

  editUrl() {
    const body = {
      title: this.editUrlForm.get('title')?.value,
      destinationLink: this.editUrlForm.get('destinationLink')?.value,
    };
    this.urlShortenerService
      .updateLink(this.urlData.id, body)
      .subscribe((response) => {
        console.log('editUrl response:', response);
        this.router.navigate(['/links']);
      });
  }
}
