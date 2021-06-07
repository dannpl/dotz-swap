import {
  Component,
  EventEmitter,
  Input,
  Output,
  OnDestroy,
} from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

import { IApplicationState } from '@web/store/application-state';
import { UserSelectors } from '@web/store/user';
import { AppService } from '@web/app.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnDestroy {
  @Input() show: boolean = false;
  @Output() readonly onClose: EventEmitter<void> = new EventEmitter<void>();
  public cartData = {};

  protected subscriptions: Subscription[] = [];

  constructor(
    protected store: Store<IApplicationState>,
    protected appService: AppService,
  ) {
    this.subscriptions.push(
      this.store
        .pipe(select(UserSelectors.selectCartData))
        .subscribe((cartData: any): void => {
          this.cartData = cartData;
        }),
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription: Subscription): void => {
      subscription.unsubscribe();
    });
  }

  close(): void {
    this.onClose.emit();
  }
}
