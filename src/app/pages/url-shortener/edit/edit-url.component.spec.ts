import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUrlComponent } from './edit-url.component';

describe('EditUrlComponent', () => {
  let component: EditUrlComponent;
  let fixture: ComponentFixture<EditUrlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditUrlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditUrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
