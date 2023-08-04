import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  form!: FormGroup;

  constructor() {}

  initForm() {
    this.form = new FormGroup({
      username: new FormControl('', {
        validators: [Validators.required, Validators.maxLength(20)],
      }),
      password: new FormControl('', { validators: [Validators.required] }),
    });
  }
  login(): void {}
}
