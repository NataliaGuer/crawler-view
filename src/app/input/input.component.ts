import { Component } from '@angular/core';
import {
  AbstractControl,
  AsyncValidatorFn,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { FloatLabelModule } from 'primeng/floatlabel';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule,
    DropdownModule,
    FloatLabelModule,
  ],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
})
export class InputComponent {
  constructor(private http: HttpClient) {}

  inputValue: string | null = null;

  selectedDepth = null;
  availableDepths = [20, 50, 100];

  userForm: FormGroup = new FormGroup({
    url: new FormControl('', [Validators.required]),
    depth: new FormControl(null, [Validators.required]),
  });

  updateInputValue(newValue: string) {
    this.inputValue = newValue;
  }

  onSubmit() {
    console.log(this.userForm.value);
  }
}

//utente inserisce input
//fa submit
//controllo esistenza
//post verso broker
