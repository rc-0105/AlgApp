import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CsvUploadService {
  constructor(private http: HttpClient) {}

  procesarCsv(file: File, algoritmo: string): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('tipo', algoritmo); // Cambiado a 'tipo' para coincidir con el backend
    // Cambia la URL si tu endpoint es diferente
    return this.http.post<any>('http://localhost:8081/api/algoritmo/completar', formData);
  }
}
