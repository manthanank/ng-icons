import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgIconsComponent } from './ng-icons.component';

describe('NgIconsComponent', () => {
  let component: NgIconsComponent;
  let fixture: ComponentFixture<NgIconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgIconsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
