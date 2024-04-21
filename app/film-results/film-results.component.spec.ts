import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmResultsComponent } from './film-results.component';

describe('FilmResultsComponent', () => {
  let component: FilmResultsComponent;
  let fixture: ComponentFixture<FilmResultsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilmResultsComponent]
    });
    fixture = TestBed.createComponent(FilmResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
