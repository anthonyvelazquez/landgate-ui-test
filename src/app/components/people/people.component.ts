import { Component, OnInit } from '@angular/core';
import { PersonModel } from 'src/app/models/person-model';
import { PeopleService } from 'src/app/services/people.service';

@Component({
  selector: 'app-people-component',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {

  peopleList: Array<PersonModel> = [];

  constructor(private peopleService: PeopleService) { }

  ngOnInit() {
    this.getPeople();
  }

  getPeople() {
    this.peopleService.getPeople().subscribe((people) => {
      this.peopleList = people;
      console.log(this.peopleList)
    })
  }

  personUpdated(data: {person: PersonModel, index: number}) {
    this.peopleList[data.index] = data.person;
  }

}
