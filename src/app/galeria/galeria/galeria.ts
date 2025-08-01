import { Component, OnInit } from '@angular/core';
import { Categoria } from '../../categorias/categoria';
import { LugarService } from '../../lugares/lugar.service';
import { CategoriaService } from '../../categorias/categoria.service';
import { Lugar } from '../../lugares/lugar';
@Component({
  selector: 'app-galeria',
  standalone: false,
  templateUrl: './galeria.html',
  styleUrl: './galeria.scss'
})
export class Galeria implements OnInit {

  lugares: Lugar[] = [];
  categoriasFiltro: Categoria[] = [];

  constructor(
    private lugarService: LugarService,
    private categoriaService: CategoriaService
  ) {
    // Inicialização de lugares e categoriasFiltro pode ser feita aqui, se necessário
  }

  ngOnInit(): void {
    this.categoriaService.obterTodas().subscribe(
      categorias => this.categoriasFiltro = categorias
    )

    this.lugarService.obterTodos().subscribe(
      lugares => this.lugares = lugares
    );
  }

}
