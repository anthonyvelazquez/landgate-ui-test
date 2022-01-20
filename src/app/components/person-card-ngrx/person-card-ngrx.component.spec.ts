import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonCardNgrxComponent } from './person-card-ngrx.component';

describe('PersonCardNgrxComponent', () => {
  let component: PersonCardNgrxComponent;
  let fixture: ComponentFixture<PersonCardNgrxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonCardNgrxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonCardNgrxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
