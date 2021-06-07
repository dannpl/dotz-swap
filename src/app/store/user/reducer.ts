import { Action, createReducer, on } from '@ngrx/store';

import * as UserActions from '@web/store/user/actions';
import { IUserState, userInitialState } from '@web/store/user/state';
import { IProfile } from '@web/interfaces/profile';

const userReducer = createReducer(
  userInitialState,
  on(
    UserActions.upsertProfile,
    (state: IUserState, { profile }: { profile: IProfile }): IUserState => {
      return { ...state, profile };
    },
  ),
  on(
    UserActions.setCartData,
    (state: IUserState, { cartData }: { cartData: any }): IUserState => {
      return { ...state, cartData };
    },
  ),
  on(
    UserActions.setShowCart,
    (state: IUserState, { showCart }: { showCart: boolean }): IUserState => {
      return { ...state, showCart };
    },
  ),
);

export function reducer(
  state: IUserState | undefined,
  action: Action,
): IUserState {
  return userReducer(state, action);
}
