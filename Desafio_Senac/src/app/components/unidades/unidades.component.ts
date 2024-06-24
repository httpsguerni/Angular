import { CommonModule } from '@angular/common';
import { Component, OnInit} from '@angular/core';
import { UnidadesService } from '../../services/unidades.service';

@Component({
  selector: 'app-unidades',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './unidades.component.html',
  styleUrl: './unidades.component.css'
})
export class UnidadesComponent implements OnInit {

  ngOnInit(): void {
    this.unidades = this.unidadesService.getUnidades();
  }

  unidades: any = [];
  constructor(private unidadesService: UnidadesService){}
  getData(){
    this.unidades = this.unidadesService.getUnidades();
  }

  navigation ={
    home: 'Home ',
    bigger:' >',
    unidades: 'Unidades',
    capital: 'Capital\n',
    grande:'Grande São Paulo e Litoral\n',
    interior: "Interior" }

  title_style={
  'color': '#78849E',
   'font-size' : '40px',
   'font-weight' : '700',
   'margin-bottom' :'30px',
   'text-align': 'center',
   'line-height': '48.41px'
  }



}
