import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLivescoreComponent } from './add-livescore.component';

describe('AddLivescoreComponent', () => {
  let component: AddLivescoreComponent;
  let fixture: ComponentFixture<AddLivescoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddLivescoreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddLivescoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
