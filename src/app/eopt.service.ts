import { Injectable } from '@angular/core';
import { RootObject } from './chemicalElement';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class EOPTService {
  constructor(private http: HttpClient) {}

  getChemicalElements() {
    return this.http.get<RootObject>('assets/elements.json');
  }
}
