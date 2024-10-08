import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmitterService {

  event = new EventEmitter();

  constructor() { }

  setLogedIn(logedIn: boolean) {
    this.event.emit(logedIn);
  }
}
