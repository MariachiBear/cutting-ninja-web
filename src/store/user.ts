import { clear } from 'idb-keyval';
import AxiosInstance from '~/API/index';
import UserRepository from '~/API/repositories/user';
import { PersistentStore } from '~/store/main';
import { useURLStore } from '~/store/url';

const userApi = new UserRepository();
export interface User extends Object {
   user: IUser | null;
}

class UserStore extends PersistentStore<User> {
   protected data(): User {
      return {
         user: null,
      };
   }

   isUserLoggedIn() {
      return computed(() => Boolean(this.state.user));
   }

   async login(email: string, password: string) {
      const result = await userApi
         .signIn({ email, password })
         .then(async (response) => {
            this.state.user = response.data;
            AxiosInstance.defaults.headers.common.Authorization = `Bearer ${this.state.user.accessToken}`;
            useURLStore.takeUrls();
            return true;
         })
         .catch((err) => {
            console.error(err);
            return false;
         });

      return result;
   }

   async signup(email: string, password: string, firstName: string, lastName: string) {
      const result = await userApi
         .signUp({ email, password, firstName, lastName })
         .then(async () => {
            this.login(email, password);
            return true;
         })
         .catch((err) => {
            console.error(err);
            return false;
         });

      return result;
   }

   async logout() {
      const result = await clear()
         .then(() => {
            localStorage.clear();
            return true;
         })
         .catch((err) => {
            console.error(err);
            return false;
         });

      return result;
   }

   async checkLogin() {
      await userApi
         .getMe()
         .then(() => {
            useURLStore.updateStoredUrl();
         })
         .catch(() => this.logout());
   }
}

export const useUserStore = new UserStore('User');
