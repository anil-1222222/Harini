import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CantactusComponent } from './cantactus.component';

describe('CantactusComponent', () => {
  let component: CantactusComponent;
  let fixture: ComponentFixture<CantactusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CantactusComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CantactusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
