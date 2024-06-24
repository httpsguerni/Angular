import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UnidadesService {

  constructor() { }

  getUnidades(){
    return [
    { id: 1, nome: 'Centro Universitário Senac - Santo Amaro', regiao: 'Capital' },
      { id: 2, nome: 'Aclimação', regiao: 'Capital' },
      { id: 3, nome: 'Francisco Matarazzo', regiao: 'Capital' },
      { id: 4, nome: 'Itaquera', regiao: 'Capital' },
      { id: 5, nome: 'Jabaquara', regiao: 'Capital' },
      { id: 6, nome: 'Jardim Primavera', regiao: 'Capital' },
      { id: 7, nome: 'Lapa Faustolo', regiao: 'Capital' },
      { id: 8, nome: 'Lapa Scipião', regiao: 'Capital' },
      { id: 9, nome: 'Lapa Tito', regiao: 'Capital' },
      { id: 10, nome: 'Largo Treze', regiao: 'Capital' },
      { id: 11, nome: 'Penha', regiao: 'Capital' },
      { id: 12, nome: 'Nações Unidas', regiao: 'Capital' },
      { id: 13, nome: 'Santana', regiao: 'Capital' },
      { id: 14, nome: 'São Miguel Paulista', regiao: 'Capital' },
      { id: 15, nome: 'Tatuapé Cel. Luís Americano', regiao: 'Capital' },
      { id: 16, nome: 'Tatuapé Serra de Bragança', regiao: 'Capital' },
      { id: 17, nome: 'Tiradentes', regiao: 'Capital' },
      { id: 18, nome: 'Vila Prudente', regiao: 'Capital' },
      { id: 19, nome: 'Bertioga', regiao: 'Grande São Paulo e Litoral' },
      { id: 20, nome: 'Guarulhos Celestino', regiao: 'Grande São Paulo e Litoral' },
      { id: 21, nome: 'Guarulhos Faccini', regiao: 'Grande São Paulo e Litoral' },
      { id: 22, nome: 'Osasco', regiao: 'Grande São Paulo e Litoral' },
      { id: 23, nome: 'Santos', regiao: 'Grande São Paulo e Litoral' },
      { id: 24, nome: 'Santo André', regiao: 'Grande São Paulo e Litoral' },
      { id: 25, nome: 'São Bernardo do Campo', regiao: 'Grande São Paulo e Litoral' },
      { id: 26, nome: 'Taboão da Serra', regiao: 'Grande São Paulo e Litoral' },
      { id: 27, nome: 'Americana', regiao: 'Interior' },
      { id: 28, nome: 'Araçatuba', regiao: 'Interior' },
      { id: 29, nome: 'Araraquara', regiao: 'Interior' },
      { id: 30, nome: 'Barretos', regiao: 'Interior' },
      { id: 31, nome: 'Bauru', regiao: 'Interior' },
      { id: 32, nome: 'Bebedouro', regiao: 'Interior' },
      { id: 33, nome: 'Botucatu', regiao: 'Interior' },
      { id: 34, nome: 'Campinas', regiao: 'Interior' },
      { id: 35, nome: 'Catanduva', regiao: 'Interior' },
      { id: 36, nome: 'Franca', regiao: 'Interior' },
      { id: 37, nome: 'Guaratinguetá', regiao: 'Interior' },
      { id: 38, nome: 'Itapetininga', regiao: 'Interior' },
      { id: 39, nome: 'Itapira', regiao: 'Interior' },
      { id: 40, nome: 'Itu', regiao: 'Interior' },
      { id: 41, nome: 'Jaboticabal', regiao: 'Interior' },
      { id: 42, nome: 'Jaú', regiao: 'Interior' },
      { id: 43, nome: 'Jundiaí', regiao: 'Interior' },
      { id: 44, nome: 'Limeira', regiao: 'Interior' },
      { id: 45, nome: 'Marília', regiao: 'Interior' }]
      }

}
