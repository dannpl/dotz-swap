import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IProfile } from '@web/interfaces/profile';

import { IUserState } from '@web/store/user/state';

const selectFeature = createFeatureSelector<IUserState>('user');

export const selectUser = createSelector(
  selectFeature,
  (state: IUserState): IProfile => {
    return state.profile;
  },
);
