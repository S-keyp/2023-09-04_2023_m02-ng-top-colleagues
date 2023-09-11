import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[tcFirstLastValidator]',
  providers: [{provide: NG_VALIDATORS, useExisting: FirstLastValidatorDirective, multi:true}]
})
export class FirstLastValidatorDirective implements Validator {

  constructor() { }
  
  validate(control: AbstractControl): ValidationErrors | null {
    const firstname = control.get('prenom')?.value
    const lastname = control.get('nom')?.value

    if((firstname !== undefined )&& (firstname === lastname)) {
      return {
        uniquename: true
      }
    }

    return null
  }

}
