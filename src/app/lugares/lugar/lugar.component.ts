import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Categoria } from '../../categorias/categoria';
import { CategoriaService } from '../../categorias/categoria.service';
import { LugarService } from '../lugar.service';

@Component({
  selector: 'app-lugar',
  standalone: false,
  templateUrl: './lugar.html',
  styleUrl: './lugar.scss'
})
export class Lugar implements OnInit {
  camposForm: FormGroup;
  categorias: Categoria[] = [];

  constructor(
    private categoriaService: CategoriaService,
    private lugarService: LugarService
  
  ) {
    this.camposForm = new FormGroup({
      nome: new FormControl('', Validators.required),
      categoria: new FormControl('', Validators.required),
      localizacao: new FormControl('', Validators.required),
      urlFoto: new FormControl('', Validators.required),
      avaliacao: new FormControl('', [Validators.required, Validators.min(1), Validators.max(5)])
    });
  }

  ngOnInit(): void {
      this.categoriaService.obterTodas().subscribe({
        next: (listaCategorias) => this.categorias = listaCategorias
    });
  }

  salvar(){
    this.lugarService.salvar(this.camposForm.value).subscribe({
      next: (lugar) => {
        console.log('Lugar salvo com sucesso:', lugar);
        this.camposForm.reset();
      },
      error: (error) => {
        console.error('Erro ao salvar lugar:', error);
      }
    });
  }



}
