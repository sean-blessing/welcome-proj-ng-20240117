import { Injectable } from '@angular/core';
import { Address } from '../model/address';

@Injectable({
  providedIn: 'root'
})
export class SystemService {
  addresses: Address[] = [];

  constructor() { }
}
