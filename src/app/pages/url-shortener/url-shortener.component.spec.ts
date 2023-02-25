import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlShortenerComponent } from './url-shortener.component';

describe('UrlShortenerComponent', () => {
  let component: UrlShortenerComponent;
  let fixture: ComponentFixture<UrlShortenerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UrlShortenerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UrlShortenerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
