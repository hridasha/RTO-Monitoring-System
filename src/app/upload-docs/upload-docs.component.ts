import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-upload-docs',
  templateUrl: './upload-docs.component.html',
  styleUrls: ['./upload-docs.component.css']
})
export class UploadDocsComponent {
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  
  public ageProofFile: File | null = null;
  public addressProofFile: File | null = null;
  public submitEnabled = false;

  onAgeProofFileSelected(event: any): void {
    this.ageProofFile = event.target.files[0];
    this.enableSubmitIfBothFilesSelected();
  }

  onAddressProofFileSelected(event: any): void {
    this.addressProofFile = event.target.files[0];
    this.enableSubmitIfBothFilesSelected();
  }

  enableSubmitIfBothFilesSelected(): void {
    if (this.ageProofFile && this.addressProofFile) {
      this.submitEnabled = true;
    } else {
      this.submitEnabled = false;
    }
  }

  onSubmit(): void {
    alert("submitedd");
    this.router.navigate(['/bookslot']);
  }
}
