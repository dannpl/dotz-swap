import { IProfile } from '@web/interfaces/profile';

export interface IUserState {
  profile: IProfile;
}

export const userInitialState: IUserState = {
  profile: {
    name: '',
    profile_id: '',
  },
};
