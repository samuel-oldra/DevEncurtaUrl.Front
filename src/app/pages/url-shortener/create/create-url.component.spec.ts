import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUrlComponent } from './create-url.component';

describe('CreateUrlComponent', () => {
  let component: CreateUrlComponent;
  let fixture: ComponentFixture<CreateUrlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateUrlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateUrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
