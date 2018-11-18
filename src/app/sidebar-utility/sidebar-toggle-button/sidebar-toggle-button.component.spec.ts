import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarToggleButtonComponent } from './sidebar-toggle-button.component';

describe('SidebarToggleButtonComponent', () => {
  let component: SidebarToggleButtonComponent;
  let fixture: ComponentFixture<SidebarToggleButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarToggleButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarToggleButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
