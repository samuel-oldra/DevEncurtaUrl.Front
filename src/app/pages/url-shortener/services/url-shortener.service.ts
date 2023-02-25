import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs';
import { UrlData } from '../models/url-shortener';

@Injectable({
  providedIn: 'root',
})
export class UrlShortenerService {
  private readonly baseUrl = 'http://localhost:3000/api/shortenedLinks/';

  constructor(private http: HttpClient) {}

  getLinks() {
    return this.http.get<UrlData[]>(`${this.baseUrl}`).pipe(
      catchError((error) => {
        console.error('Error in getLinks() ', error);
        throw error;
      })
    );
  }

  createLink(body: object) {
    return this.http.post<UrlData>(`${this.baseUrl}`, body).pipe(
      catchError((error) => {
        console.error('error in createLink()', error);
        throw error;
      })
    );
  }

  updateLink(urlId: number, body: object) {
    return this.http.put(`${this.baseUrl}${urlId}`, body).pipe(
      catchError((error) => {
        console.error('Error in updateLink()', error);
        throw error;
      })
    );
  }

  deleteLink(urlId: number) {
    return this.http.delete(`${this.baseUrl}${urlId}`).pipe(
      catchError((error) => {
        console.error('Error in deleteLink()', error);
        throw error;
      })
    );
  }
}
