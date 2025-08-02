import { Component, OnInit } from '@angular/core';
import { LayoutProps } from './layoutprops';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, map } from 'rxjs';

@Component({
  selector: 'app-layout',
  standalone: false,
  templateUrl: './layout.html',
  styleUrl: './layout.scss'
})
export class Layout {
  props: LayoutProps = {
    titulo: '',
    subTitulo: ''
  };

  constructor(
    private router: Router,
    private activateRoute: ActivatedRoute
  ) {
    // Inicialização de props pode ser feita aqui, se necessário
  }

  ngOnInit(): void {
    this.router.events.pipe(
      filter(() => this.activateRoute.firstChild !== null),
      map(() => this.obterPropriedadeLayout())
    ).subscribe((props: LayoutProps) => {
      this.props = props;
    });
  }

  obterPropriedadeLayout() : LayoutProps {
    let rotaFilha = this.activateRoute.firstChild;
    while(rotaFilha?.firstChild) {
      rotaFilha = rotaFilha.firstChild;
    }
    return rotaFilha?.snapshot.data as LayoutProps || { titulo: '', subTitulo: '' };
  }
}
