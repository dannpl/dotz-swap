import { Component, OnDestroy } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

import { IApplicationState } from './../../store/application-state';
import { UserSelectors } from './../../store/user';
import { IProfile } from './../../interfaces/profile';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnDestroy {
  public user: IProfile | undefined;

  protected subscriptions: Subscription[] = [];

  constructor(protected store: Store<IApplicationState>) {
    this.subscriptions.push(
      this.store
        .pipe(select(UserSelectors.selectUser))
        .subscribe((user: IProfile): void => {
          this.user = user;
        }),
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription: Subscription): void => {
      subscription.unsubscribe();
    });
  }
}
