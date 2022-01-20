import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { PersonModel } from 'src/app/models/person-model';
import { loadPeoples, updatePeople } from './ngrx/actions/people.actions';
import { selectPeople } from './ngrx/selectors/people.selectors';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-people-component',
  templateUrl: './people-ngrx.component.html',
  styleUrls: ['./people-ngrx.component.scss']
})
export class PeopleNgrxComponent implements OnInit {

  people$: Observable<PersonModel[]>;

  constructor(private store: Store) { }

  ngOnInit() {
    this.store.dispatch(loadPeoples());
    this.people$ = this.store.select(selectPeople);
  }

  personUpdated(data: {person: PersonModel, index: number}) {
    this.store.dispatch(updatePeople({person: data.person, index: data.index}));
    // this.peopleList[data.index] = data.person;
  }

}
