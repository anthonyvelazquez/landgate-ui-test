import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromPeople from '../reducers/people.reducer';

export const selectPeopleState = createFeatureSelector<fromPeople.State>(
  fromPeople.peopleFeatureKey
);

export const selectPeople = createSelector(selectPeopleState, (state: fromPeople.State) => state.people);