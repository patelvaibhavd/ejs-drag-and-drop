import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DraganddropComponent } from './draganddrop.component';

describe('DraganddropComponent', () => {
  let component: DraganddropComponent;
  let fixture: ComponentFixture<DraganddropComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DraganddropComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DraganddropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
