import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  name: string = 'Maulana Aariz Bhai'
  phone_number: string = '+91-95217 11833'
  constructor() { }
}
