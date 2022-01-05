import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtobagngComponent } from './addtobagng.component';

describe('AddtobagngComponent', () => {
  let component: AddtobagngComponent;
  let fixture: ComponentFixture<AddtobagngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddtobagngComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddtobagngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
