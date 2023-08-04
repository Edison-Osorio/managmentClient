import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserLogin } from '../core/models/UserLogin';
import { environment } from 'src/environment/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  private readonly BASE_URL = environment.apiURL;
  private readonly RESOURCE_LOGIN = 'login';
  private readonly RESOURCE_SAVE = 'save';
  private readonly RESOURCE_REQUEST = 'user';

  constructor(private readonly http: HttpClient) {}

  login(form: UserLogin): Observable<any> {
    return this.http.post(`${this.BASE_URL}/${this.RESOURCE_LOGIN}`, form);
  }

  save(data: UserLogin): Observable<SaveUser> {
    return this.http.post<SaveUser>(
      `${this.BASE_URL}/${this.RESOURCE_SAVE}`,
      data
    );
  }

  getRequest() {
    return this.http.get(`${this.BASE_URL}/${this.RESOURCE_REQUEST}`);
  }
}

export interface SaveUser {
  message: string;
}
