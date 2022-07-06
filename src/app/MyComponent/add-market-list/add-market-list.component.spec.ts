import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMarketListComponent } from './add-market-list.component';

describe('AddMarketListComponent', () => {
  let component: AddMarketListComponent;
  let fixture: ComponentFixture<AddMarketListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMarketListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddMarketListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
