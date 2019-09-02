import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatoriosImgProdComponent } from './relatorios-img-prod.component';

describe('RelatoriosImgProdComponent', () => {
  let component: RelatoriosImgProdComponent;
  let fixture: ComponentFixture<RelatoriosImgProdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelatoriosImgProdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelatoriosImgProdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
