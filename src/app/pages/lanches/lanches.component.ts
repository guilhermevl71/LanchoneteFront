import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProdutoService } from '../../core/services/produto.service';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-lanches',
  imports: [CommonModule, RouterLink],
  templateUrl: './lanches.component.html',
  styleUrl: './lanches.component.css'
})
export class LanchesComponent {

  lanches:any[] = [];
  
    constructor(private produtoService: ProdutoService, public authService: AuthService){}
  
    ngOnInit(){
  
      this.produtoService.listarProdutos().subscribe({
  
        next: (res:any) => {
  
          this.lanches = res.Lanche;
  
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
