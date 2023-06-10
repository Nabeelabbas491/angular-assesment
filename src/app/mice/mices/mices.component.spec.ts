import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MicesComponent } from './mices.component';

describe('MicesComponent', () => {
  let component: MicesComponent;
  let fixture: ComponentFixture<MicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
