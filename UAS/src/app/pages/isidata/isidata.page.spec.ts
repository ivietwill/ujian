import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IsidataPage } from './isidata.page';

describe('IsidataPage', () => {
  let component: IsidataPage;
  let fixture: ComponentFixture<IsidataPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IsidataPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IsidataPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
