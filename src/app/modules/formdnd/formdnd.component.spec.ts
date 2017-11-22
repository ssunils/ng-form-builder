import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormdndComponent } from './formdnd.component';

describe('FormdndComponent', () => {
  let component: FormdndComponent;
  let fixture: ComponentFixture<FormdndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormdndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormdndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
