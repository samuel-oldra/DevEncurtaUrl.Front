import { UrlShortenerService } from './services/url-shortener.service';
import { NavigationExtras, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UrlData } from './models/url-shortener';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-url-shortener',
  templateUrl: './url-shortener.component.html',
  styleUrls: ['./url-shortener.component.scss'],
})
export class UrlShortenerComponent implements OnInit {
  loading = true;
  links: UrlData[] = [];

  constructor(
    private router: Router,
    private urlShortenerService: UrlShortenerService
  ) {}

  ngOnInit(): void {
    this.getAllUrl();
  }

  routeToCreatePage() {
    this.router.navigate(['/links', 'create']);
  }

  routeToEditPage(urlData: UrlData) {
    const extras: NavigationExtras = {
      state: { urlData },
    };

    this.router.navigate(['/links', 'edit'], extras);
  }

  urlDeleted() {
    this.getAllUrl();
  }

  private getAllUrl() {
    this.urlShortenerService
      .getLinks()
      .pipe(finalize(() => (this.loading = false)))
      .subscribe((response) => {
        console.log('getAllUrl response', response);
        this.links = response;
      });
  }
}
