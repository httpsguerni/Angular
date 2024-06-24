import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-senac',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './senac.component.html',
  styleUrl: './senac.component.css'
})
export class SenacComponent {
  navigation ={
    home: 'Home',
    senac: '> Senac',
  }

  wedo={
    title: 'O que fazemos?',
    content1: 'São muitos projetos e desafios para apresentar a você uma formação inovadora, que alia o aprender na prática com tecnologias e infraestrutura de referência no mercado. Confira nossa programação!',
    content2: 'Além dos cursos, oferecemos soluções especiais para empresas. Temos dois hotéis-escola reconhecidos dentro e fora do país e a nossa Editora já comercializou mais de 11 milhões de exemplares.'
  }

  wedo_title={
   'color': '#78849E',
   'font-size' : '40px',
   'font-weight' : '700',
   'margin-bottom' :'20px',
   'text-align': 'left',
   'line-height': '48.41px'
  }

  wedo_content={
    'margin-top' : '2%',
    'color': '#78849E',
    'font-size' : '20px',
    'text-align': 'left',
    'line-height': '24.2px'
  }

}
