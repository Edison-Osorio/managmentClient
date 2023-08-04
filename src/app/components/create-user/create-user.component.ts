import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss'],
})
export class CreateUserComponent {
  form!: FormGroup;
  constructor(
    private readonly clienteService: ClientService,
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

  save() {
    debugger;
    if (this.username.value === '' || this.password.value === '') {
      this.form.markAsTouched();
      alert('Todos los campos son requirido');
    } else {
      this.clienteService.save(this.form.value).subscribe((response) => {
        alert(response.message);
        console.log(response);
      });

      // .subscribe({
      //   next: () => {
      //     alert('Se creo usuario con exito');
      //     this.router.navigate(['/login']);
      //   },
      //   error: (err) => {
      //     console.log(err);
      //     alert(err.error.message);
      //   },
      // });
    }
  }

  redirectToLogin() {
    this.router.navigate(['login']);
  }

  get username(): FormControl {
    return this.form.get('username') as FormControl;
  }

  get password(): FormControl {
    return this.form.get('password') as FormControl;
  }
}
