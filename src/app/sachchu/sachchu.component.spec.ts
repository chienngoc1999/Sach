import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SachchuComponent } from './sachchu.component';

describe('SachchuComponent', () => {
  let component: SachchuComponent;
  let fixture: ComponentFixture<SachchuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SachchuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SachchuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
