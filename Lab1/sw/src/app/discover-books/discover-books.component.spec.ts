import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscoverBooksComponent } from './discover-books.component';

describe('DiscoverBooksComponent', () => {
  let component: DiscoverBooksComponent;
  let fixture: ComponentFixture<DiscoverBooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscoverBooksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscoverBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
