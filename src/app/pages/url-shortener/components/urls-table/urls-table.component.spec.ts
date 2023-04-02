import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlsTableComponent } from './urls-table.component';

describe('UrlsTableComponent', () => {
  let component: UrlsTableComponent;
  let fixture: ComponentFixture<UrlsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UrlsTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UrlsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
