import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UltralabNxCdk5Component } from './ultralab-nx-cdk-5.component';

describe('UltralabNxCdk5Component', () => {
  let component: UltralabNxCdk5Component;
  let fixture: ComponentFixture<UltralabNxCdk5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UltralabNxCdk5Component],
    }).compileComponents();

    fixture = TestBed.createComponent(UltralabNxCdk5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
