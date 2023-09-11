import { Directive } from '@angular/core';
import { AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, ValidationErrors } from '@angular/forms';
import { Observable, map, of } from 'rxjs';
import { Colleague } from 'src/app/models/colleague';
import { ColleagueService } from 'src/app/providers/colleague.service';

@Directive({
  selector: '[tcPseudoValidator]',
  providers: [{provide: NG_ASYNC_VALIDATORS, useExisting: PseudoValidatorDirective, multi:true}]
})
export class PseudoValidatorDirective implements AsyncValidator{

  constructor(private colleagueService: ColleagueService) { }

  validate(control: AbstractControl): Observable<ValidationErrors | null> {

    return this.colleagueService.getCollegueByPseudo(control.value).pipe(
      map((colleague: Colleague | null) => {
        console.log('TA MERE LA TCHOIIIIIIN', colleague)  
        if(colleague != null) return {pseudoMessage: "Ce pseudo est déjà utilisé."};
        return null;
      })
    )
  }
}
