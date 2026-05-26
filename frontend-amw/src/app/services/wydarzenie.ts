import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Wydarzenie } from '../models/wydarzenie';

@Injectable({
  providedIn: 'root'
})
export class WydarzenieService {
  private apiUrl = 'http://localhost:3000/api/wydarzenia'; 

  constructor(private http: HttpClient) { }

  getWydarzenia(): Observable<Wydarzenie[]> {
    return this.http.get<Wydarzenie[]>(this.apiUrl);
  }

  addWydarzenie(wydarzenie: Wydarzenie): Observable<Wydarzenie> {
    return this.http.post<Wydarzenie>(this.apiUrl, wydarzenie);
  }

  updateWydarzenie(id: string | number, wydarzenie: Wydarzenie): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, wydarzenie);
  }

  deleteWydarzenie(id: string | number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}