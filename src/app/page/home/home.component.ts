import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { AppService } from '../../app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnDestroy {
  public banners: any = [];
  public sections: any = [];

  protected subscriptions: Subscription[] = [];

  constructor(protected appService: AppService) {
    this.getBanners();
    this.getSections();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription: Subscription): void => {
      subscription.unsubscribe();
    });
  }

  getBanners(): void {
    this.subscriptions.push(
      this.appService.getBanners().subscribe((response): void => {
        this.banners = response;
      }),
    );
  }

  getSections(): void {
    this.subscriptions.push(
      this.appService.getSections().subscribe((response): void => {
        this.sections = response;
      }),
    );
  }
}
