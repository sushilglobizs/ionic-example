import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Book2Page } from './book2.page';

describe('Book2Page', () => {
  let component: Book2Page;
  let fixture: ComponentFixture<Book2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Book2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
