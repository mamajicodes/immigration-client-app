import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImmigrationListComponent } from './immigration-list.component';

describe('ImmigrationListComponent', () => {
  let component: ImmigrationListComponent;
  let fixture: ComponentFixture<ImmigrationListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImmigrationListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImmigrationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
