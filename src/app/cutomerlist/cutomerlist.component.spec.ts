import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CutomerlistComponent } from './cutomerlist.component';

describe('CutomerlistComponent', () => {
  let component: CutomerlistComponent;
  let fixture: ComponentFixture<CutomerlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CutomerlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CutomerlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
