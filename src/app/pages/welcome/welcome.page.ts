import { Component } from '@angular/core';

@Component({
  selector: 'tc-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss']
})
export class WelcomePage {
  colleagueList = [
    {
      pseudo: 'azer',
      score: 100,
      photo: "https://picsum.photos/200"
    },
    {
      pseudo: 'qsdf',
      score: 300,
      photo: "https://picsum.photos/200"
    },
    {
      pseudo: 'wcxv',
      score: 400,
      photo: "https://picsum.photos/200"
    },
    {
      pseudo: 'yuio',
      score: 125,
      photo: "https://picsum.photos/200"
    },
    {
      pseudo: 'hjkl',
      score: 1000,
      photo: "https://picsum.photos/200"
    },
    {
      pseudo: 'Juan',
      score: -400,
      photo: "https://picsum.photos/200"
    },
    {
      pseudo: 'Michel',
      score: -125,
      photo: "https://picsum.photos/200"
    },
    {
      pseudo: 'Yes',
      score: -220,
      photo: "https://picsum.photos/200"
    },
  
  ]

}
