import { Component, Output, EventEmitter } from '@angular/core';
import { CsvUploadService } from './csv-upload.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-csv-upload',
  templateUrl: './csv-upload.component.html',
  imports: [CommonModule],
  styleUrls: ['./csv-upload.component.css']
})
export class CsvUploadComponent {
  selectedFile: File | null = null;
  algorithm: string = '';
  loading = false;
  error: string | null = null;

  datosProcesados: any[] | null = null;
  @Output() datosProcesadosChange = new EventEmitter<any[]>();

  constructor(private csvService: CsvUploadService) {}

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0] || null;
    this.error = null;
  }

  onAlgorithmChange(event: any) {
    this.algorithm = event.target.value;
  }

  uploadFile() {
    if (!this.selectedFile || !this.algorithm) {
      this.error = 'Selecciona un archivo y un algoritmo.';
      return;
    }
    this.loading = true;
    this.error = null;
    this.csvService.procesarCsv(this.selectedFile, this.algorithm).subscribe({
      next: (data) => {
        this.datosProcesados = data;
        this.datosProcesadosChange.emit(data);
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Error al procesar el archivo.';
        this.loading = false;
      }
    });
  }
}
