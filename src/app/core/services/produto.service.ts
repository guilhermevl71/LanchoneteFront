import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ProdutoService {

  private API = 'https://localhost:7073/Lanchonete';

  constructor(private http: HttpClient) { }

  listarProdutos(){

    return this.http.get(this.API);

  }

  adicionarCarrinho(produtoId:number){

    const dados = {

      produtoId: produtoId,
      quantidade: 1

    };

    return this.http.post(

      `${this.API}/carrinho`,
      
      dados

    );

  }

  mostrarCarrinho(){

  return this.http.get(

    `${this.API}/MostrarCarrinho`

  );

}

}