import { Action, createReducer, on } from '@ngrx/store';
import { PersonModel } from 'src/app/models/person-model';
import * as PeopleActions from '../actions/people.actions';

export const peopleFeatureKey = 'people';

export interface State {
  people: Array<PersonModel>;
}

export const initialState: State = {
  people: []
};

export const reducer = createReducer(
  initialState,

  on(PeopleActions.loadedPeople, (state, action) => {
    return {
      ...state,
      people: action.people
    }
  }),

  on(PeopleActions.updatePeople, (state, action) => {
    let newPeopleArray = [...state.people];
    newPeopleArray[action.index] = action.person
    return {
      ...state,
      people: newPeopleArray
    }
  }),

);

