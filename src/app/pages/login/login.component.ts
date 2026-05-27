import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule, NgIf, RouterLink, RouterLinkActive],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private authService: AuthService, private router: Router ) { }

  nome:string = '';
  email:string = '';
  senha:string = '';
  confirmarsenha:string = '';
  endereco:string = '';
  erro:string = '';
  ischecked:boolean = false;

  logar() {

    const dados = {
      email: this.email,
      password: this.senha
    };

    this.authService.login(dados).subscribe(
      {
        next: (res: any) => {
           console.log(res); 
           localStorage.setItem("token", res.token);
            this.router.navigate(['']);
        },
        error: (err) => { console.log(err); this.erro = err.error; }
      }
    )
  };


}
