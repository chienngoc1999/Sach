import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SukiensachComponent } from './sukiensach.component';

describe('SukiensachComponent', () => {
  let component: SukiensachComponent;
  let fixture: ComponentFixture<SukiensachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SukiensachComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SukiensachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
