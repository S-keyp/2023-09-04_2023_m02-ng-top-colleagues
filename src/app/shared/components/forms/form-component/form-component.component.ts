import { Component } from '@angular/core';
import { ColleagueService } from 'src/app/providers/colleague.service';
import { Colleague } from 'src/app/models/colleague';
import { Router } from '@angular/router';

class PostModel {
  pseudo?: string;
  nom?: string;
  prenom?: string;
  score?: number;
  photo?: string;
}

@Component({
  selector: 'tc-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.scss']
})
export class FormComponent {
  postModel = new PostModel();

  constructor(private colleagueService: ColleagueService, private route: Router){ }

  submit(){
    const colleagueToSend = {
      pseudo: this.postModel.pseudo!,
      last: this.postModel.nom,
      first: this.postModel.prenom,
      score: 0,
      photo: this.postModel.photo!
    }

    this.colleagueService.createColleague(colleagueToSend)    
    this.route.navigate(['homepage'])
  }
}
