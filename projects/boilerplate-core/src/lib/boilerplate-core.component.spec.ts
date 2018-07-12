import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoilerplateCoreComponent } from './boilerplate-core.component';

describe('BoilerplateCoreComponent', () => {
  let component: BoilerplateCoreComponent;
  let fixture: ComponentFixture<BoilerplateCoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoilerplateCoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoilerplateCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
