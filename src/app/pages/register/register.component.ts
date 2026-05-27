import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [CommonModule, FormsModule, NgIf],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  constructor(private authService: AuthService, private router: Router ) { }

  nome:string = '';
  email:string = '';
  senha:string = '';
  confirmarsenha:string = '';
  endereco:string = '';
  erro:string = '';
  ischecked:boolean = false;

  registrar() {

    const dados = {
      name: this.nome,
      email: this.email,
      password: this.senha,
      role: 'cliente'
    };

    this.authService.register(dados).subscribe(
      {
        next: (res: any) => {
           console.log(res.message); 
            this.router.navigate(['login']);
        },
        error: (err) => { console.log(err); this.erro = err.error; }
      }
    )
  };
}
