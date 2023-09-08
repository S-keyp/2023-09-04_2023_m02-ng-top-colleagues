import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LikeHate } from 'src/app/models/like-hate';

@Component({
  selector: 'tc-like-hate',
  templateUrl: './like-hate.component.html',
  styleUrls: ['./like-hate.component.scss']
})
export class LikeHateComponent {
  @Input() canLike! : boolean
  @Input() canDislike! : boolean
  @Output() vote: EventEmitter<LikeHate> = new EventEmitter<LikeHate>();

  like(){
    this.vote.emit(LikeHate.LIKE);
  }
  hate(){
    this.vote.emit(LikeHate.HATE);
  }
}


