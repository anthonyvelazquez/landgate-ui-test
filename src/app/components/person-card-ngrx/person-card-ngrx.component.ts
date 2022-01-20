import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PersonModel } from 'src/app/models/person-model';

@Component({
  selector: 'app-person-card-ngrx',
  templateUrl: './person-card-ngrx.component.html',
  styleUrls: ['./person-card-ngrx.component.scss']
})
export class PersonCardNgrxComponent implements OnInit {

  @Input() personData: PersonModel = null;
  @Input() index: number = -1;
  @Output() personUpdated = new EventEmitter<{person: PersonModel, index: number}>();
  editablePersonData: PersonModel = null;

  editMode = false;
  
  constructor() { }

  ngOnInit(): void {
    this.editablePersonData = Object.assign({}, this.personData);
  }

  cancelEdit(): void {
    this.editablePersonData = Object.assign({}, this.personData);
    this.editMode = false;
  }

  updatePerson() {
    this.personUpdated.emit({person: this.editablePersonData, index: this.index});
    this.editMode = false;
  }

}
