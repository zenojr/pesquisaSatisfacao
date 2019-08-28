import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatoriosGChartComponent } from './relatorios-gchart.component';

describe('RelatoriosGChartComponent', () => {
  let component: RelatoriosGChartComponent;
  let fixture: ComponentFixture<RelatoriosGChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelatoriosGChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelatoriosGChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
