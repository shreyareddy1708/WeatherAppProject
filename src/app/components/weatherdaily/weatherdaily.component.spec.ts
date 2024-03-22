import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherdailyComponent } from './weatherdaily.component';

describe('WeatherdailyComponent', () => {
  let component: WeatherdailyComponent;
  let fixture: ComponentFixture<WeatherdailyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeatherdailyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WeatherdailyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
