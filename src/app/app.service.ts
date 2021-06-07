import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export abstract class AppService {
  protected api: string;
  protected mockedUser: string = '1';

  constructor(protected http: HttpClient) {
    this.api = 'https://60b685eb17d1dc0017b87fe4.mockapi.io';
  }

  getProducts(): Observable<unknown> {
    return this.http.get(`${this.api}/products`);
  }

  getProductById(id: string): Observable<unknown> {
    return this.http.get(`${this.api}/products/${id}`);
  }

  getProductByName(value: string): Observable<unknown> {
    return this.http.get(`${this.api}/products?name=${value}`);
  }

  getSections(): Observable<unknown> {
    return this.http.get(`${this.api}/sections`);
  }

  getBanners(): Observable<unknown> {
    return this.http.get(`${this.api}/banners`);
  }

  getUser(): Observable<unknown> {
    return this.http.get(`${this.api}/users/${this.mockedUser}`);
  }

  putUser(data: unknown): Observable<unknown> {
    return this.http.put(`${this.api}/users/${this.mockedUser}`, data);
  }
}
