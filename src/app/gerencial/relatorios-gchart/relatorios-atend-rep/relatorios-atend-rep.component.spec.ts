import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatoriosAtendRepComponent } from './relatorios-atend-rep.component';

describe('RelatoriosAtendRepComponent', () => {
  let component: RelatoriosAtendRepComponent;
  let fixture: ComponentFixture<RelatoriosAtendRepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelatoriosAtendRepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelatoriosAtendRepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
