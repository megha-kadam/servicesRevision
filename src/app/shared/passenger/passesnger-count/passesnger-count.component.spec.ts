import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassesngerCountComponent } from './passesnger-count.component';

describe('PassesngerCountComponent', () => {
  let component: PassesngerCountComponent;
  let fixture: ComponentFixture<PassesngerCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PassesngerCountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PassesngerCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
