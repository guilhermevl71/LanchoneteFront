import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [CommonModule, FormsModule, NgIf],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  nome:string = '';
  email:string = '';
  senha:string = '';
  confirmarsenha:string = '';
  endereco:string = '';
  erro:boolean = false;
  ischecked:boolean = false;
}
