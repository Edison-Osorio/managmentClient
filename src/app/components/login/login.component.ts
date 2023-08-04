import { CommonModule } from '@angular/common';
import { ClientService } from './../../services/client.service';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { UserLogin } from 'src/app/core/models/UserLogin';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private readonly clientService: ClientService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.form = new FormGroup({
      username: new FormControl('', {
        validators: [Validators.required, Validators.maxLength(20)],
      }),
      password: new FormControl('', { validators: [Validators.required] }),
    });
  }
  login(): void {
    this.clientService.login(this.form.value).subscribe({
      next: () => {
        alert('Ah ingresado a la aplicación');
        this.router.navigate(['/home']);
      },
      error: (res) => {
        console.log(res);

        alert(res.error.message);
        this.username.reset();
        this.password.reset();
      },
    });
  }

  createUser() {
    this.router.navigate(['createUser2']);
  }

  get username(): FormControl {
    return this.form.get('username') as FormControl;
  }

  get password(): FormControl {
    return this.form.get('password') as FormControl;
  }
}
