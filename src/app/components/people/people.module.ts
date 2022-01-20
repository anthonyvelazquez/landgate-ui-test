import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {PeopleComponent} from './people.component';
import { PersonCardComponent } from '../person-card/person-card.component';

@NgModule({
  declarations: [PeopleComponent, PersonCardComponent],
  imports: [CommonModule, FormsModule],
  exports: [PeopleComponent]
})
export class PeopleModule {}
