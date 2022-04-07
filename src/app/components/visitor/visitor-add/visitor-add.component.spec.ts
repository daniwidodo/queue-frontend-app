import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitorAddComponent } from './visitor-add.component';

describe('VisitorAddComponent', () => {
  let component: VisitorAddComponent;
  let fixture: ComponentFixture<VisitorAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisitorAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitorAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
