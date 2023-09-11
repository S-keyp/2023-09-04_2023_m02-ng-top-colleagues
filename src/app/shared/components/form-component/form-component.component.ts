import { Component } from '@angular/core';
import { ColleagueService } from 'src/app/providers/colleague.service';
import { Colleague } from '../models/colleague';

class PostModel {
  pseudo?: string;
  nom?: string;
  prenom?: string;
  score: number;
  photo?: string;

  constructor(){
    this.score = 0
  }
}

@Component({
  selector: 'tc-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.scss']
})
export class FormComponent {
  postModel = new PostModel();

  constructor(private colleagueService: ColleagueService){ }

  submit(){
    
    this.colleagueService.createColleague(this.postModel)
    console.log(this.postModel)
  }
}
