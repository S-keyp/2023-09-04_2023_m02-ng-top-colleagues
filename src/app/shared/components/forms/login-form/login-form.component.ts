import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError, of } from 'rxjs';
import { AuthService } from 'src/app/providers/auth.service';
import { ColleagueService } from 'src/app/providers/colleague.service';

@Component({
  selector: 'tc-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {
  reactiveForm: FormGroup;
  invalidCred = false

	constructor(
		private formBuilder: FormBuilder, 
		private authService: AuthService, 
		private router: Router
		) {

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
		this.authService.signIn(
			this.reactiveForm.get('pseudo')!.value!, 
			this.reactiveForm.get('password')!.value!
		).pipe(
				catchError(error => {
				this.invalidCred = true
				return of(null)
			}
		)).subscribe(
			() => this.authService.getCurrentUser()
		)
	}
}
