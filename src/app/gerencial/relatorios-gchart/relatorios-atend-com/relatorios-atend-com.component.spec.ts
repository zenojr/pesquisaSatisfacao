import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatoriosAtendComComponent } from './relatorios-atend-com.component';

describe('RelatoriosAtendComComponent', () => {
  let component: RelatoriosAtendComComponent;
  let fixture: ComponentFixture<RelatoriosAtendComComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelatoriosAtendComComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelatoriosAtendComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
