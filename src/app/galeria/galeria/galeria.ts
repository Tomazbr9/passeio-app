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
  nomeFiltro: string = '';
  categoriaFiltro: string = '';

  constructor(
    private lugarService: LugarService,
    private categoriaService: CategoriaService
  ) {
    // Inicialização de lugares e categoriasFiltro pode ser feita aqui, se necessário
  }

  ngOnInit(): void {
    this.categoriaService.obterTodas().subscribe(
      categorias => this.categoriasFiltro = categorias
    );

    this.lugarService.obterTodos().subscribe(
      lugares => this.lugares = lugares
    );
  }

  getTotalEstrelas(lugar: Lugar): string {
    return '&#9733;'.repeat(lugar.avaliacao || 0) + '&#9734;'.repeat(5 - (lugar.avaliacao || 0));
  }

  filtrar(){
    this.lugarService.filtrar(this.nomeFiltro, this.categoriaFiltro).subscribe(
      lugares => this.lugares = lugares
    );
  }
}
