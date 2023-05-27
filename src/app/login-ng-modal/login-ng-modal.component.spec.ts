import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginNgModalComponent } from './login-ng-modal.component';

describe('LoginNgModalComponent', () => {
  let component: LoginNgModalComponent;
  let fixture: ComponentFixture<LoginNgModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginNgModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginNgModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
