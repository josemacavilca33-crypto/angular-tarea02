import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IDoctor } from '../models/doctor.interface';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  private API_URL = `http://localhost:3000`;
  private TOKEN: string = `eyJhbGciOiJIUzI1NiIsInR5cCI6IKpXVCJ9`;
  constructor(private httpClient: HttpClient) { }
  getDoctor() {
    return this.httpClient.get(`${this.API_URL}/doctores`)
  }

  saveDoctor(data: IDoctor) {
    return this.httpClient.post(`${this.API_URL}/doctores`, data, {
      headers: {
        'Authorization': `Bearer ${this.TOKEN}`,
        'Content-Type': `application/json`
      }
    })
  }
  updateDoctor(data: IDoctor) {
    const { id } = data;
    return this.httpClient.put(`${this.API_URL}/doctores/${id}`, data, {
      headers: {
        'Authorization': `Bearer ${this.TOKEN}`,
        'Content-Type': `application/json`
      }
    })
  }
  deleteDoctor(id: number) {
    return this.httpClient.delete(`${this.API_URL}/doctores/${id}`, {
      headers: {
        'Authorization': `Bearer ${this.TOKEN}`,
        'Content-Type': `application/json`
      }
    })
  }

}
