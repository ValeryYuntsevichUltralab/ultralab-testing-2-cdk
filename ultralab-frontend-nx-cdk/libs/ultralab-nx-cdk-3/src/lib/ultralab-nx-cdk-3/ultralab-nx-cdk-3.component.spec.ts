import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UltralabNxCdk3Component } from './ultralab-nx-cdk-3.component';

describe('UltralabNxCdk3Component', () => {
  let component: UltralabNxCdk3Component;
  let fixture: ComponentFixture<UltralabNxCdk3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UltralabNxCdk3Component],
    }).compileComponents();

    fixture = TestBed.createComponent(UltralabNxCdk3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
