import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private httpClient: HttpClient) { }

  public getRecipes(size: number): Observable<any> {
    return this.httpClient.get(`https://random-data-api.com/api/food/random_food?size=${size}`, {});
  }
}
