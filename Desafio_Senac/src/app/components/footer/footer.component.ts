import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  curso={ 
    senac: 'O Senac',
    cursos:'Cursos',
    unidades:'Unidades'
  }

  copyright={
    copy:'Copyright © 2020. Todos os Direitos Reservados',
    senac:'Serviço Nacional de Aprendizagem Comercial - SP',
    cnpj:'CNPJ: 03.709.814/0001-98'

  }
   

  
}
