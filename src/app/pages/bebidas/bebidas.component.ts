import { Component } from '@angular/core';
import { ProdutoService } from '../../core/services/produto.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-bebidas',
  imports: [CommonModule, RouterLink],
  templateUrl: './bebidas.component.html',
  styleUrl: './bebidas.component.css'
})

export class BebidasComponent {

  bebidas:any[] = [];

  constructor(private produtoService: ProdutoService, public authService: AuthService){}

  ngOnInit(){

    this.produtoService.listarProdutos().subscribe({

      next: (res:any) => {

        this.bebidas = res.Bebida;

      },

      error: (err) => {

        console.log(err);

      }

    });

  }

  adicionarCarrinho(produtoId:number){

    this.produtoService
        .adicionarCarrinho(produtoId)
        .subscribe({

          next: (res) => {

            console.log(res);

            alert("Produto adicionado!");

          },

          error: (err) => {

            console.log(err);

          }

        });

  }

}