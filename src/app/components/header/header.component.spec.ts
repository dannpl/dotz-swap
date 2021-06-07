import { TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

import { HeaderComponent } from './header.component';
import {
  IApplicationState,
  initialValue,
} from './../../store/application-state';

describe('HeaderComponent', () => {
  let headerComponent: HeaderComponent;
  let mockStore: MockStore<IApplicationState>;

  const initialState: IApplicationState = initialValue;

  beforeEach((): void => {
    TestBed.configureTestingModule({
      providers: [HeaderComponent, provideMockStore({ initialState })],
    });

    headerComponent = TestBed.inject(HeaderComponent);
    mockStore = TestBed.inject(MockStore);

    spyOn(mockStore, 'dispatch').and.callFake((): void => {});
  });

  it('should initialize HeaderComponent', (): void => {
    expect(headerComponent).toBeDefined();
    expect(mockStore).toBeDefined();
  });
});
