import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ModuleAppComponent } from './module.app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        ModuleAppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(ModuleAppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'first-angular-app'`, () => {
    const fixture = TestBed.createComponent(ModuleAppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('first-angular-app');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(ModuleAppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('first-angular-app app is running!');
  });
});
