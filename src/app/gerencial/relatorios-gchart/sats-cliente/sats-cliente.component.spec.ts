import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SatsClienteComponent } from './sats-cliente.component';

describe('SatsClienteComponent', () => {
  let component: SatsClienteComponent;
  let fixture: ComponentFixture<SatsClienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SatsClienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SatsClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
