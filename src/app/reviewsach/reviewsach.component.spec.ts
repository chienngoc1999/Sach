import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewsachComponent } from './reviewsach.component';

describe('ReviewsachComponent', () => {
  let component: ReviewsachComponent;
  let fixture: ComponentFixture<ReviewsachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewsachComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewsachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
