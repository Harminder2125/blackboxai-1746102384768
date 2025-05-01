import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  constructor(private http: HttpClient, private authService: AuthService) {}

  getSales(): Observable<any> {
    const token = this.authService.getToken();
    const headers = token ? new HttpHeaders().set('Authorization', 'Bearer ' + token) : undefined;
    return this.http.get('/api/sales', { headers });
  }
}
