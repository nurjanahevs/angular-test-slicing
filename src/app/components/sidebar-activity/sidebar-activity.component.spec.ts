import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarActivityComponent } from './sidebar-activity.component';

describe('SidebarActivityComponent', () => {
  let component: SidebarActivityComponent;
  let fixture: ComponentFixture<SidebarActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarActivityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
