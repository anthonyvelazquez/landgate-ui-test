import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PersonModel } from 'src/app/models/person-model';

@Component({
  selector: 'app-person-card',
  templateUrl: './person-card.component.html',
  styleUrls: ['./person-card.component.scss']
})
export class PersonCardComponent implements OnInit {

  @Input() personData: PersonModel = null;
  @Input() index: number = -1;
  @Output() personUpdated = new EventEmitter<{person: PersonModel, index: number}>();
  defaultPersonData: PersonModel = null;

  editMode = false;
  
  constructor() { }

  ngOnInit(): void {
    this.defaultPersonData = this.personData;
  }

  cancelEdit(): void {
    this.personData = this.defaultPersonData;
    this.editMode = false;
  }

  updatePerson() {
    this.personUpdated.emit({person: this.personData, index: this.index});
    this.editMode = false;
  }

}
