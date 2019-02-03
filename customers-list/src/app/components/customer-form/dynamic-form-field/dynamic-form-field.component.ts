import { FormField } from '../../../classes/form-fields/formField';
import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'dynamic-form-field',
  templateUrl: './dynamic-form-field.component.html',
  styleUrls: ['./dynamic-form-field.component.scss']
})
export class DynamicFormFieldComponent {
  @Input() form: FormGroup;
  @Input() formField: FormField;
  @Input() customer: FormField;

  constructor() {
    
  } 
}