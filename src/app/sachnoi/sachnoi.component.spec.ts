import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SachnoiComponent } from './sachnoi.component';

describe('SachnoiComponent', () => {
  let component: SachnoiComponent;
  let fixture: ComponentFixture<SachnoiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SachnoiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SachnoiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
