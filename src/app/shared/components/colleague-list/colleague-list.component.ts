import { Component, OnInit } from '@angular/core';
import { Colleague } from 'src/app/models/colleague';
import { ColleagueService } from 'src/app/providers/colleague.service';

@Component({
	selector: 'tc-colleague-list',
	templateUrl: './colleague-list.component.html',
	styleUrls: ['./colleague-list.component.scss'],
	providers: [ColleagueService]
})
export class ColleagueListComponent implements OnInit {
	colleagueList: Colleague[] = [];;

	constructor(private colleagueService: ColleagueService){ }

	ngOnInit(){
		this.update()
	}

	update() {
		this.colleagueService.getColleagues().subscribe(
			data => {
				this.colleagueList = data
			}
		)
	}
}
