import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SenacComponent } from './senac.component';

describe('SenacComponent', () => {
  let component: SenacComponent;
  let fixture: ComponentFixture<SenacComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SenacComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SenacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
