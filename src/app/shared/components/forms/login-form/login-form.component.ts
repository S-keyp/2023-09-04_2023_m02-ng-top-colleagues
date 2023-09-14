import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ColleagueService } from 'src/app/providers/colleague.service';

@Component({
  selector: 'tc-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {
  reactiveForm: FormGroup;

	constructor(private formBuilder: FormBuilder, private colleagueService: ColleagueService, private route: Router) {
		

		this.reactiveForm = this.formBuilder.group({
			pseudo: [ '',
				{ validators: [ Validators.required, Validators.minLength(2) ]},
				
			],
			password: [ '',
				{ validators: [ Validators.required, Validators.minLength(2) ]},
			],
		},
		{ updateOn: 'blur' }
		)
	}

	submit(){
		const colleagueToSend = {
		  pseudo: this.reactiveForm.get('pseudo')!.value!,
		  password: this.reactiveForm.get('password')!.value!
		}
	
		// this.colleagueService.createColleague(colleagueToSend)
		this.route.navigate(['homepage'])
	}
}
