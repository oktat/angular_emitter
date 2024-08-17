import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { EmitterService } from '../shared/emitter.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm: any;

  constructor(
    private builder: FormBuilder,
    private emitter: EmitterService,
    private router: Router
  ) {}
  
  ngOnInit() {
    this.loginForm = this.builder.group({
      username: '',
      password: ''
    })
  }

  onSubmit() {
    console.log(this.loginForm.value);
    //Ide jön az azonosítás
    this.emitter.setLogedIn(true);
    this.router.navigate(['result']);
  }

}
