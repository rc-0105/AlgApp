import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.prod'; 

@Injectable({ providedIn: 'root' })
export class CsvUploadService {
  constructor(private http: HttpClient) {}

  procesarCsv(file: File, algoritmo: string): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('tipo', algoritmo); // Cambiado a 'tipo' para coincidir con el backend
    return this.http.post<any>(environment.apiUrl, formData);
  }
}
