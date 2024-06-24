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

  list:any[] =[];
  session: any;

addTarefa(item:string) {

let newItem = { id: this.list.length + 1, name: item };
this.list.push(newItem);
localStorage.setItem('session', JSON.stringify(this.list));

}

removeTarefa(id:number){
this.list = this.list.filter(item=>item.id!==id)
}

  button={
    add: 'ADICIONAR',
    remove: 'REMOVER'
  }

  loadData(){
    let data: any = localStorage.getItem('session');
    this.session = JSON.parse(data);
  }
}

