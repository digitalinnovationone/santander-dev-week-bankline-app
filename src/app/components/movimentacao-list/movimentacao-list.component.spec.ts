import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovimentacaoListComponent } from './movimentacao-list.component';

describe('MovimentacaoListComponent', () => {
  let component: MovimentacaoListComponent;
  let fixture: ComponentFixture<MovimentacaoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovimentacaoListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovimentacaoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
