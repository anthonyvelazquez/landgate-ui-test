import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { catchError, concatMap, map, tap } from 'rxjs/operators';
import {EMPTY, of} from 'rxjs';

import * as PeopleActions from '../actions/people.actions';
import {loadedPeople} from '../actions/people.actions';
import { PeopleService } from 'src/app/services/people.service';

@Injectable()
export class PeopleEffects {

  constructor(private actions$: Actions, private peopleService: PeopleService) {}

  loadPeoples$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(PeopleActions.loadPeoples),
      concatMap(() => this.peopleService.getPeople().pipe(
        map(people => PeopleActions.loadedPeople({people: people})),
        catchError(() => EMPTY)
      )));
  });
}
