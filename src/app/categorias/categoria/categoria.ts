import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'; 
import { CategoriaService } from '../categoria.service';

@Component({
  selector: 'app-categoria',
  standalone: false,
  templateUrl: './categoria.html',
  styleUrl: './categoria.scss'
})
export class Categoria {
  camposForm: FormGroup;

  constructor(private categoriaService: CategoriaService) {
    this.camposForm = new FormGroup({
      nome: new FormControl('', Validators.required),
      descricao: new FormControl('', Validators.required)
    });
  }

  salvar(){
    this.camposForm.markAllAsTouched();
    if (this.camposForm.valid) {
      this.categoriaService.salvar(this.camposForm.value).subscribe({
        next: (categoria) => {
          console.log("Categoria salva com sucesso!", categoria);
          this.camposForm.reset();
        },
        error: (error) => {
          console.error("Erro ao salvar categoria:", error);
        }
      });
      return; 
    }

    console.log("Valores Digitados: ", this.camposForm.value);
    console.log("Está valido? ", this.camposForm.valid);
  }

  isCampoInvalido(nomeCampo: string): boolean {
    const campo = this.camposForm.get(nomeCampo);
    return campo?.invalid && campo?.touched && campo?.errors?.['required']
  }



}
