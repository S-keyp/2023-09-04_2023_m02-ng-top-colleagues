import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { ColleagueService } from 'src/app/providers/colleague.service';

@Component({
	selector: 'tc-create-colleague-reactive-form',
	templateUrl: './create-colleague-reactive-form.component.html',
	styleUrls: ['./create-colleague-reactive-form.component.scss']
})
export class CreateColleagueReactiveFormComponent {

	reactiveForm: FormGroup;

	constructor(private formBuilder: FormBuilder, private colleagueService: ColleagueService) {
		

		this.reactiveForm = this.formBuilder.group({
			pseudo: [
				'',
				{
					validators: [
						Validators.required,
						Validators.minLength(2),
						this.validerSync
					],
					asyncValidators: [
						// this.validerAsync
					],
				},
				{updateOn: 'blur'}
			],
			nom: [
				'',
				{
					validators: [
						Validators.required,
						Validators.minLength(2)
					],
				},
				{updateOn: 'blur'}
			],
			prenom: [
				'',
				{
					validators: [
						Validators.required,
						Validators.minLength(2)
					],
				},
				{updateOn: 'blur'}
			],
			photo: [
				'',
				{
					validators: [
						Validators.required,
					],
				},
				{updateOn: 'blur'}
			],
		})
	}

	submit(){
		const colleagueToSend = {
		  pseudo: this.reactiveForm.get('pseudo')!.value!,
		  last: this.reactiveForm.get('nom')!.value,
		  first: this.reactiveForm.get('prenom')!.value,
		  score: 0,
		  photo: this.reactiveForm.get('photo')!.value!
		}
	
		console.log(colleagueToSend);
		this.colleagueService.createColleague(colleagueToSend)
	}

	validerSync(control: AbstractControl): ValidationErrors | null{
		const firstname = control.get('prenom')?.value
		const lastname = control.get('nom')?.value

		if((firstname !== undefined )&& (firstname === lastname)) {
		return {
			uniquename: true
		}
		}

		return null
	}

	// validerAsync(control: AbstractControl): Observable<ValidationErrors | null>{

	// }
}
