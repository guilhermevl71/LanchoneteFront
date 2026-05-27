import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private API = "https://localhost:7073"

  constructor(private http: HttpClient) { }

  login(dados: any) {
    return this.http.post(`${this.API}/Auth/login`, dados);
  }

  isLogged(): boolean {

    const token = localStorage.getItem("token");
    return !!token;
  } 

  logout() {
    return localStorage.removeItem("token");
  }

  register(dados: any ) {
    return this.http.post(`${this.API}/Auth/register`, dados);
  }
}
