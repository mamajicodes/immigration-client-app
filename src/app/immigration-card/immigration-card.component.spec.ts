import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImmigrationCardComponent } from './immigration-card.component';

describe('ImmigrationCardComponent', () => {
  let component: ImmigrationCardComponent;
  let fixture: ComponentFixture<ImmigrationCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImmigrationCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImmigrationCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
