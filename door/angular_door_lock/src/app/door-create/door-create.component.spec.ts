import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoorCreateComponent } from './door-create.component';

describe('DoorCreateComponent', () => {
  let component: DoorCreateComponent;
  let fixture: ComponentFixture<DoorCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoorCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoorCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
