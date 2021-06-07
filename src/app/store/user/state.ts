import { IProfile } from '@web/interfaces/profile';

export interface IUserState {
  profile: IProfile;
  showCart: boolean;
  cartData: any;
}

export const userInitialState: IUserState = {
  profile: {
    id: '',
    createdAt: '',
    name: '',
    avatar: '',
    address: { street: '', number: '', zip_code: '' },
    points: 0,
    orders: [],
  },
  showCart: false,
  cartData: {},
};
