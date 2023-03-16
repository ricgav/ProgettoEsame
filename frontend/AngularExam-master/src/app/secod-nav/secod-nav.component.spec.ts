import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecodNavComponent } from './secod-nav.component';

describe('SecodNavComponent', () => {
  let component: SecodNavComponent;
  let fixture: ComponentFixture<SecodNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecodNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecodNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
