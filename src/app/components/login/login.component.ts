import { ClientService } from './../../services/client.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserLogin } from 'src/app/core/models/UserLogin';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  form!: FormGroup;

  constructor(
    private readonly clientService: ClientService,
    private readonly router: Router
  ) {
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

  get username(): FormControl {
    return this.form.get('username') as FormControl;
  }

  get password(): FormControl {
    return this.form.get('password') as FormControl;
  }
}
