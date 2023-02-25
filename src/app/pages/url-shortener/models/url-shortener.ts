import { FormControl } from '@angular/forms';

export interface UrlForm {
  title: FormControl<string>;
  destinationLink: FormControl<string>;
}

export interface UrlData {
  id: number;
  title: string;
  shortenedLink: string;
  destinationLink: string;
  createdAt: string;
}
