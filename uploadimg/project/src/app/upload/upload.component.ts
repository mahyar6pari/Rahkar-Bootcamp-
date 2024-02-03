import { Component, inject } from '@angular/core';
import { FileUploadService } from './file.service';

@Component({
  selector: 'app-upload',
  standalone: true,
  imports: [],
  templateUrl: './upload.component.html',
  styleUrl: './upload.component.scss'
})
export class UploadComponent {
  selectedFile!: File;

  constructor(private fileUploadService: FileUploadService) {}

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  onUpload(): void {
    console.log(this.selectedFile.name);
    if (this.selectedFile) {
      this.fileUploadService.uploadFile(this.selectedFile)
        .subscribe(response => {
          console.log('File uploaded successfully:', response);
        }, error => {
          console.error('Error uploading file:', error);
        });
    }
}
}