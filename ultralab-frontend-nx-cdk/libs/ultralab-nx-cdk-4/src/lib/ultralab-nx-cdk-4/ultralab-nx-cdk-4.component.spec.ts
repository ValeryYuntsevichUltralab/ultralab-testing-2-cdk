import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UltralabNxCdk4Component } from './ultralab-nx-cdk-4.component';

describe('UltralabNxCdk4Component', () => {
  let component: UltralabNxCdk4Component;
  let fixture: ComponentFixture<UltralabNxCdk4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UltralabNxCdk4Component],
    }).compileComponents();

    fixture = TestBed.createComponent(UltralabNxCdk4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
