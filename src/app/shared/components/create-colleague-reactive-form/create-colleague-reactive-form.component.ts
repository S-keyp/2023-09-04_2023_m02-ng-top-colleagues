import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'tc-create-colleague-reactive-form',
  templateUrl: './create-colleague-reactive-form.component.html',
  styleUrls: ['./create-colleague-reactive-form.component.scss']
})
export class CreateColleagueReactiveFormComponent {
  reactiveForm = new FormGroup({saisie: new FormControl()});
}
