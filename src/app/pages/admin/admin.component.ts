import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProdutoService } from '../../core/services/produto.service';

@Component({
  selector: 'app-admin',
  imports: [CommonModule, FormsModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})

export class AdminComponent {

  produtos:any[] = [];

  nome:string = '';
  tipo:string = '';
  preco:number = 0;

  editando:boolean = false;

  produtoEditandoId:number = 0;

  constructor(private produtoService: ProdutoService){}

  ngOnInit(){

    this.carregarProdutos();

  }

  carregarProdutos(){

    this.produtoService
        .listarProdutos()
        .subscribe({

          next: (res:any) => {

            this.produtos = [

              ...(res.Bebida || []),

              ...(res.Lanche || [])

            ];

          }

        });

  }

  adicionarProduto(){

    const dados = {

      nome: this.nome,
      tipo: this.tipo,
      preco: this.preco

    };

    this.produtoService
        .adicionarProduto(dados)
        .subscribe({

          next: () => {

            alert("Produto criado!");

            this.limparCampos();

            this.carregarProdutos();

          },

          error: (err) => {

            console.log(err);

          }

        });

  }

  deletarProduto(id:number){

    this.produtoService
        .deletarProduto(id)
        .subscribe({

          next: () => {

            alert("Produto removido!");

            this.carregarProdutos();

          }

        });

  }

  editarProduto(produto:any){

    this.editando = true;

    this.produtoEditandoId = produto.id;

    this.nome = produto.nome;

    this.tipo = produto.tipo;

    this.preco = produto.preco;

  }

  atualizarProduto(){

    const dados = {

      nome: this.nome,
      tipo: this.tipo,
      preco: this.preco

    };

    this.produtoService
        .atualizarProduto(
          this.produtoEditandoId,
          dados
        )
        .subscribe({

          next: () => {

            alert("Produto atualizado!");

            this.editando = false;

            this.limparCampos();

            this.carregarProdutos();

          }

        });

  }

  limparCampos(){

    this.nome = '';

    this.tipo = '';

    this.preco = 0;

  }

}