import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculService {

  constructor() { }

  additionner(n1: number, n2: number) {
    return n1 + n2;
  }
}
