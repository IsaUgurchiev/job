import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-cv-edit',
  templateUrl: './cv-edit.component.html',
  styleUrls: ['./cv-edit.component.scss']
})
export class CvEditComponent implements OnInit {
  cvForm: FormGroup;

  constructor() {
    this.cvForm = new FormGroup({
      firstName: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z-]{2,}$')]),
      lastName: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z-]{2,}$')]),
      currentPosition: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z-]{2,}$')]),
      country: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z-]{2,}$')]),
      city: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z-]{2,}$')])
    });
  }

  ngOnInit(): void {}

  getErrorMessage(field: string, label: string): string | null {
    if (this.cvForm.controls[field].touched) {
      if (this.cvForm.controls[field].errors?.pattern) {
        return `${label} must contain only letters and hyphens and has at least 2 characters. Please try again`;
      }
    }

    return null;
  }

  onSubmit(formData) {
    console.warn('Your order has been submitted', formData);
  }
}
