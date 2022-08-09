import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

interface Iindices {
  version: string;
  autor: string;
  fecha: string;
  uf: Iindice;
  ivp: Iindice;
  dolar: Iindice;
  dolar_intercambio: Iindice;
  euro: Iindice;
  ipc: Iindice;
  utm: Iindice;
  imacec: Iindice;
  tpm: Iindice;
  libra_cobre: Iindice;
  tasa_desempleo: Iindice;
  bitcoin: Iindice;
}

interface Iindice {
  codigo: string;
  nombre: string;
  unidad_medida: string;
  fecha: string;
  valor: number;
}

@Component({
  selector: 'app-indicadores',
  templateUrl: './indicadores.component.html',
  styleUrls: ['./indicadores.component.css']
})
export class IndicadoresComponent implements OnInit {

  public indices?: Iindices;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<Iindices>('https://mindicador.cl/api').subscribe((respuesta) => {
      console.log(respuesta);
      this.indices = respuesta;
    })
  }

}
