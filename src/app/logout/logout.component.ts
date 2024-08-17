import { Component } from '@angular/core';
import { EmitterService } from '../shared/emitter.service';

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent {
  constructor(
    private emitter: EmitterService
  ){
    //Az ngOnInit() metódusban nem jó!
    this.emitter.setLogedIn(false);
  }
}
