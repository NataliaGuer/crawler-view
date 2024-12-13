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
import { catchError, of, take } from 'rxjs';

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
    this.http
      .post('localhost:3002/api/jobs', {
        url: this.userForm.value.url,
        depth: this.userForm.value.depth,
      })
      .pipe(
        take(1),
        catchError((err) => of(err))
      )
      .subscribe((res: string | number) => {
        if (typeof res === 'string') {
          console.log(res);
          return;
        }
      });
  }
}

//utente inserisce input
//fa submit
//controllo esistenza
//post verso broker
