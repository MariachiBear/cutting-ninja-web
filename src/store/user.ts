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

   isUserLoggedIn = computed(() => Boolean(this.state.user && this.state.user.accessToken));

   async login(email: string, password: string, checkUse: boolean = false) {
      const result = await userApi
         .signIn({ email, password })
         .then(async (response) => {
            this.state.user = response.data;
            AxiosInstance.defaults.headers.common.Authorization = `Bearer ${this.state.user.accessToken}`;

            if (!checkUse) useURLStore.takeUrls();

            return true;
         })
         .catch((err) => {
            console.error(err);
            return false;
         });

      return result;
   }

   async signup(email: string, password: string, firstName: string, lastName: string) {
      const result: true | number = await userApi
         .signUp({ email, password, firstName, lastName })
         .then(async () => {
            this.login(email, password);
            return true;
         })
         .catch((err) => {
            console.error(err);
            return err.response.status;
         });

      return result;
   }

   async updateUserPassword(newPassword: string) {
      const result = await userApi.updateMe({ password: newPassword });

      return result;
   }

   async updateUser(userInfo: IUserUpdate) {
      const result: number | true = await userApi
         .updateMe(userInfo)
         .then(async () => {
            const userNewInfo = await userApi.getMe();

            this.state.user = {
               ...userNewInfo.data,
               accessToken: String(this.state.user?.accessToken),
            };

            return true;
         })
         .catch((err) => {
            console.error(err);
            return err.response.status;
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
      if (this.state.user != null)
         await userApi.getMe().catch(async () => {
            await useURLStore.delete();
            await useURLStore.init();
            this.state.user = null;
         });
   }
}

export const useUserStore = new UserStore('User');
