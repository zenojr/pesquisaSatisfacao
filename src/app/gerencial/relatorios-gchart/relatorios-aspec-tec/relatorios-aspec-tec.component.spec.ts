import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatoriosAspecTecComponent } from './relatorios-aspec-tec.component';

describe('RelatoriosAspecTecComponent', () => {
  let component: RelatoriosAspecTecComponent;
  let fixture: ComponentFixture<RelatoriosAspecTecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelatoriosAspecTecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelatoriosAspecTecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
