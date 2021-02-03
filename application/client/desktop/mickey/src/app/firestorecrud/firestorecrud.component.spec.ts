import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirestorecrudComponent } from './firestorecrud.component';

describe('FirestorecrudComponent', () => {
  let component: FirestorecrudComponent;
  let fixture: ComponentFixture<FirestorecrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirestorecrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirestorecrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});