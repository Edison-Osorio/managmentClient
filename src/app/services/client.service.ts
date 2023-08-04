import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserLogin } from '../core/models/UserLogin';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  private readonly BASE_URL = environment.apiURL;
  private readonly RESOURCE_LOGIN = 'login';

  constructor(private readonly http: HttpClient) {}

  login(form: UserLogin) {
    return this.http.post(`${this.BASE_URL}/${this.RESOURCE_LOGIN}`, form);
  }
}
