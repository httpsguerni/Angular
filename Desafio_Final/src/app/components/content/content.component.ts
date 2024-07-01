import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent implements OnInit {

  list: any[] = [];
  session: any;

  button = {
    add: 'ADICIONAR',
    remove: 'REMOVER'
  }

  ngOnInit() {
    this.loadData();
  }

  addTarefa(item: string) {
    let newItem = { id: this.list.length + 1, name: item };
    this.list.push(newItem);
    localStorage.setItem('session', JSON.stringify(this.list));
  }

  removeTarefa(id: number) {
    this.list = this.list.filter(item => item.id !== id);
    localStorage.setItem('session', JSON.stringify(this.list));
  }

  loadData() {
    let data: any = localStorage.getItem('session');
    if (data) {
      this.list = JSON.parse(data);
    } else {
      this.list = [];
    }
  }
}
