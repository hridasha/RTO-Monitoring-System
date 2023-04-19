import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
    providedIn: 'root'
  })
  export class AuthService {
  
    constructor(private http: HttpClient) { }
  
    signUp(username: string, email: string, password: string): Observable<any> {
      return this.http.post('/api/signup', {username, email, password});
    }
  
    login(email: string, password: string): Observable<any> {
      return this.http.post('/api/login', {email, password});
    }
  
  }
  