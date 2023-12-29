import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateBookPage } from './create-book.page';

describe('CreateBookPage', () => {
  let component: CreateBookPage;
  let fixture: ComponentFixture<CreateBookPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CreateBookPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
