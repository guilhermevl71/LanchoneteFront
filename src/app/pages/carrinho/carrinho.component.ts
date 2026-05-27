import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProdutoService } from '../../core/services/produto.service';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-carrinho',
  imports: [CommonModule, RouterLink],
  templateUrl: './carrinho.component.html',
  styleUrl: './carrinho.component.css'
})

export class CarrinhoComponent {

  itens:any[] = [];

  total:number = 0;

  erro:string = '';

  constructor(private produtoService: ProdutoService, public authService: AuthService){}

  ngOnInit(){

    this.carregarCarrinho();

  }

  carregarCarrinho(){

    this.produtoService
        .mostrarCarrinho()
        .subscribe({

          next: (res:any) => {

            console.log(res);

            this.itens = res;

            this.calcularTotal();

          },

          error: (err) => {

            console.log(err);

            this.erro = err.error;

          }

        });

  }

  calcularTotal(){

    this.total = 0;

    this.itens.forEach(item => {

      this.total += item.precoUnitario * item.quantidade;

    });

  }

}