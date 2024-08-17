import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { EmitterService } from './shared/emitter.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  logedIn = false;

  constructor(
    private emitter: EmitterService
  ) {}

  ngOnInit() {
    this.emitter.event.subscribe((logedIn) => {
      this.logedIn = logedIn;
    });
  }
}
