import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule, NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  nome:string = '';
  email:string = '';
  senha:string = '';
  confirmarsenha:string = '';
  endereco:string = '';
  erro:boolean = false;
  ischecked:boolean = false;
}
