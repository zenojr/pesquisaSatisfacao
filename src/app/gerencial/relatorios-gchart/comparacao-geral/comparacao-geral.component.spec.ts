import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparacaoGeralComponent } from './comparacao-geral.component';

describe('ComparacaoGeralComponent', () => {
  let component: ComparacaoGeralComponent;
  let fixture: ComponentFixture<ComparacaoGeralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComparacaoGeralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComparacaoGeralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
