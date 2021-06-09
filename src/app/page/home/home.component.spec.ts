import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { HomeComponent } from './home.component';
import { AppService } from '../../app.service';

describe('HomeComponent', () => {
  let homeComponent: HomeComponent;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let appServiceSpy: jasmine.SpyObj<AppService>;

  beforeEach((): void => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', {
      get: () => of({}),
    });

    appServiceSpy = jasmine.createSpyObj('AppService', {
      getBanners: of([]),
      getSections: of([]),
    });

    TestBed.configureTestingModule({
      providers: [
        HomeComponent,
        { provide: HttpClient, useValue: httpClientSpy },
        { provide: AppService, useValue: appServiceSpy },
      ],
    });

    homeComponent = TestBed.inject(HomeComponent);
  });

  it('should initialize HomeComponent', (): void => {
    expect(homeComponent).toBeDefined();
  });

  it('should banners have data after trigger getBanners', (): void => {
    homeComponent.getBanners();

    expect(homeComponent.banners).toEqual([]);
  });

  it('should sections have data after trigger getSections', (): void => {
    homeComponent.getSections();

    expect(homeComponent.sections).toEqual([]);
  });
});
