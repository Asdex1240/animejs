import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VerticalPage } from './vertical.page';

describe('VerticalPage', () => {
  let component: VerticalPage;
  let fixture: ComponentFixture<VerticalPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VerticalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
