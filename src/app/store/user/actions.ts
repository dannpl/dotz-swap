import { createAction, props } from '@ngrx/store';

import { IProfile } from '@web/interfaces/profile';

export const upsertProfile = createAction(
  '[user] - Upsert Profile',
  props<{ profile: IProfile }>(),
);

export const setCartData = createAction(
  '[user] - Set Cart data',
  props<{ cartData: any }>(),
);

export const setShowCart = createAction(
  '[user] - Set show Cart',
  props<{ showCart: boolean }>(),
);
