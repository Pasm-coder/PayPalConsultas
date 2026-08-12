import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentroInfoComponent } from './centro.info.component';

describe('CentroInfoComponent', () => {
  let component: CentroInfoComponent;
  let fixture: ComponentFixture<CentroInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CentroInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CentroInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
