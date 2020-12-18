import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndlistComponent } from './endlist.component';

describe('EndlistComponent', () => {
  let component: EndlistComponent;
  let fixture: ComponentFixture<EndlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EndlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EndlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
