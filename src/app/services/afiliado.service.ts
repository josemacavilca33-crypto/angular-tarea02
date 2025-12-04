import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IAfiliado } from '../models/afiliado.interface';

@Injectable({
  providedIn: 'root'
})
export class AfiliadoService {
private API_URL = `http://localhost:3000`;
  private TOKEN: string = `eyJhbGciOiJIUzI1NiIsInR5cCI6IKpXVCJ9`;
 
  constructor(private httpClient: HttpClient) { }

  getAfiliado(){
    return this.httpClient.get(`${this.API_URL}/afiliados`)
  }
  saveAfiliado(data: IAfiliado){
    return this.httpClient.post(`${this.API_URL}/afiliados`, data, {
      headers: {
        'Authorization': `Bearer ${this.TOKEN}`,
        'Content-Type' : `application/json`
      }
    })
  }
  updateAfiliado(data: IAfiliado){
    const {id} = data;
    return this.httpClient.put(`${this.API_URL}/afiliados/${id}`, data,{
       headers: {
        'Authorization': `Bearer ${this.TOKEN}`,
        'Content-Type' : `application/json`
      }
    })
  }

  deleteAfiliado(id: number){
    return this.httpClient.delete(`${this.API_URL}/afiliados/${id}`, {
       headers: {
        'Authorization': `Bearer ${this.TOKEN}`,
        'Content-Type' : `application/json`
      }
    })
  }


}


