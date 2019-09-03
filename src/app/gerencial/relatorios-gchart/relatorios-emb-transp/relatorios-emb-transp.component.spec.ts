import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatoriosEmbTranspComponent } from './relatorios-emb-transp.component';

describe('RelatoriosEmbTranspComponent', () => {
  let component: RelatoriosEmbTranspComponent;
  let fixture: ComponentFixture<RelatoriosEmbTranspComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelatoriosEmbTranspComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelatoriosEmbTranspComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
