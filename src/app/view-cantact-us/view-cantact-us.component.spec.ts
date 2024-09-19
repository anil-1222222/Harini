import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCantactUsComponent } from './view-cantact-us.component';

describe('ViewCantactUsComponent', () => {
  let component: ViewCantactUsComponent;
  let fixture: ComponentFixture<ViewCantactUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewCantactUsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewCantactUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
