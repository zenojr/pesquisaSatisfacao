import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatoriosConsidFinaisComponent } from './relatorios-consid-finais.component';

describe('RelatoriosConsidFinaisComponent', () => {
  let component: RelatoriosConsidFinaisComponent;
  let fixture: ComponentFixture<RelatoriosConsidFinaisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelatoriosConsidFinaisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelatoriosConsidFinaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
