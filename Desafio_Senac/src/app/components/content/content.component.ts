import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {

  education={
    dreams:'Vários sonhos, o mesmo caminho: a educação!',
    since:'Desde 1946, trabalhamos para transformar vidas. Aqui, pessoas de todas as idades são incentivadas a desenvolver seu potencial para expandir suas possibilidades de futuro. É assim que formamos profissionais que sabem fazer grandes ideias virarem realidade.'
  }

}
