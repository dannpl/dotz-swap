import { createAction, props } from '@ngrx/store';

import { IProfile } from '@web/interfaces/profile';

export const upsertProfile = createAction(
  '[user] - Upsert Profile',
  props<{ profile: IProfile }>(),
);
