import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Book2ViewPage } from './book2-view.page';

describe('Book2ViewPage', () => {
  let component: Book2ViewPage;
  let fixture: ComponentFixture<Book2ViewPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Book2ViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
