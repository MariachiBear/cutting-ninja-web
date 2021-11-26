import { promiseTimeout } from '@vueuse/core';
import UrlRepository from '~/API/repositories/urls';
import UserRepository from '~/API/repositories/user';
import { PersistentStore } from '~/store/main';

const urlApi = new UrlRepository();
const userApi = new UserRepository();
export interface URL extends Object {
   storedUrls: IURL[];
   isTableVisible: boolean;
   activeUrl: IURL | null;
}

class URLStore extends PersistentStore<URL> {
   protected data(): URL {
      return {
         storedUrls: [],
         isTableVisible: true,
         activeUrl: null,
      };
   }

   urlsByDate = computed(() =>
      this.state.storedUrls.sort(
         (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      )
   );

   async takeUrls() {
      if (this.state.storedUrls.length > 0) {
         await urlApi.take({ urls: this.state.storedUrls }).catch((err) => {
            console.error(err);
            return false;
         });
      }
   }

   async shortUrl(longUrl: string) {
      await promiseTimeout(500);
      const result = await urlApi
         .create({ longUrl })
         .then(async (response) => {
            this.state.storedUrls.push(response.data);
            return true;
         })
         .catch((err) => {
            console.error(err);
            return false;
         });

      return result;
   }

   async updateStoredUrl() {
      const result = await userApi
         .getMyUrls()
         .then(async (response) => {
            this.state.storedUrls = response.data;
            return true;
         })
         .catch((err) => {
            console.error(err);
            return false;
         });
      return result;
   }

   async deleteUrl(url: IURL, isLoggedIn: boolean) {
      let result = true;
      if (isLoggedIn)
         result = await urlApi
            .delete(url._id)
            .then(() => {
               return true;
            })
            .catch((err) => {
               console.error(err);
               return false;
            });
      const urlIndex = this.state.storedUrls.indexOf(url);
      this.state.storedUrls.splice(urlIndex, 1);
      return result;
   }

   setActiveUrl(url: IURL) {
      this.state.activeUrl = url;
   }

   toggleIsTableVisible(state?: boolean) {
      this.state.isTableVisible = typeof state === 'boolean' ? state : !this.state.isTableVisible;
   }
}

export const useURLStore = new URLStore('Urls');
